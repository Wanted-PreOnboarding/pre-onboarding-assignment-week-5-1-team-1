import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SearchBox from '../SearchBox';
import Recommendation from '../Recommendation';

const datas =  [
	{
		"sickCd": "A00",
		"sickNm": "콜레라"
	},
	{
		"sickCd": "A01",
		"sickNm": "장티푸스 및 파라티푸스"
	},
	{
		"sickCd": "A02",
		"sickNm": "기타 살모넬라 감염"
	},
	{
		"sickCd": "A03",
		"sickNm": "시겔라증"
	},
	{
		"sickCd": "A04",
		"sickNm": "기타 세균성 장 감염"
	},]


const Search = () => {
	const [search, setSearch] = useState('')
	const [searchingDatas, setSearchingDatas] = useState([])
	const [curLocation, setCurLocation] = useState(0)

	function handleSearch(e){
		setSearch(e.target.value)
	}

	function handleNavigate(e){
		const {key} = e
		if(key === 'ArrowDown'){
			setCurLocation(curLocation + 1)
		}else if(key === 'ArrowUp'){
			setCurLocation(curLocation - 1)
		}
	}

	useEffect(() => {
		if(search){
			const boldedDatas = datas.map((data) => {
				let regex = new RegExp(search, "gim");
				return data.sickNm.replace(regex, `<b>${search}<b>`)
			})
			setSearchingDatas(boldedDatas)
		}
	}, [search])
	

	return (
    <Container>
      <SearchBox search={search} handleSearch={handleSearch} handleNavigate={handleNavigate}/>
      <Recommendation searchingDatas={searchingDatas}curLocation={curLocation}/>
    </Container>
	);
};

export default Search;

const Container = styled.div`
  background-color: #d0e8fd;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

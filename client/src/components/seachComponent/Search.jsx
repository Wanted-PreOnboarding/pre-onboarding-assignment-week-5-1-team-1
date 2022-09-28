import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SearchBox from '../SearchBox';
import Recommendation from '../Recommendation';
import useSearch from '../../hooks/useSearch';

const Search = () => {
	const {input, searchList, onChangeInput} = useSearch()
	const [searchingDatas, setSearchingDatas] = useState([])
	const [curLocation, setCurLocation] = useState(0)

	function handleNavigate(e){
		const {key} = e
		if(key === 'ArrowDown'){
			setCurLocation(curLocation + 1)
		}else if(key === 'ArrowUp'){
			setCurLocation(curLocation - 1)
		}
	}

	useEffect(() => {
		if(input){
			const trimmed5List = searchList.slice(0,5)
			const boldedDatas = trimmed5List.map((data) => {
				let regex = new RegExp(input, "gim");
				return data.sickNm.replace(regex, `<b>${input}<b>`)
			})
			setSearchingDatas(boldedDatas)
		}
	}, [searchList])
	

	return (
    <Container>
      <SearchBox 
				input={input}
				handleNavigate={handleNavigate}
				onChangeInput={onChangeInput}
			/>
      <Recommendation 
				searchingDatas={searchingDatas}
				curLocation={curLocation}
			/>
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

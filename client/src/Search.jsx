import React, { useEffect, useState } from 'react';
// import styled from 'styled-components'

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
		<div>
			<input type="text" value={search} placeholder='검색어를 입력해주세요.'  onChange={handleSearch} onKeyDown={handleNavigate}/>
			<button>검색</button>
			<Data searchingDatas={searchingDatas} curLocation={curLocation}/>
		</div>


	);
};

const Data = ({searchingDatas, curLocation}) => {
		console.info(curLocation)

		return <div>
			추천 검색어가 나와야 할 곳
			<hr></hr>
			{searchingDatas?.map((data, index) => {
				const splitedArr = data.split("<b>")
				return (
					<div key={data} style={{color: curLocation === index && 'red'}} >
						<span>{splitedArr[0]}</span>
						<b>{splitedArr[1]}</b>
						<span>{splitedArr[2]}</span>
					</div>
				)
			}
			)}
			</div>
	
	// return (<div>{datas.map((data) => <div key={data.sickCd}>{data.sickNm}</div>)}</div>)
	
}

export default Search;

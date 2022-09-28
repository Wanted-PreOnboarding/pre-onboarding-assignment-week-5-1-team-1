import React, { useEffect, useState } from 'react';

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

	function handleSearch(e){
		setSearch(e.target.value)
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
			<input type="text" value={search} placeholder='검색어를 입력해주세요.'  onChange={handleSearch}/>
			<button>검색</button>
			<Data searchingDatas={searchingDatas}/>
		</div>


	);
};

const Data = ({searchingDatas}) => {

		return <div>
			추천 검색어가 나와야 할 곳
			<hr></hr>
			{searchingDatas?.map((data) => {
				const splitedArr = data.split("<b>")
				return (
					<div key={data}>
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
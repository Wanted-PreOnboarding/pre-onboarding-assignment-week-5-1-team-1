import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SearchBox from '../components/SearchBox';
import Recommendation from '../components/Recommendation';
import useSearch from '../hooks/useSearch';
import useEvent from '../hooks/useEvent';
import { boldMaker } from '../util/boldMaker';

const Search = () => {
	const {input, searchList, onChangeInput} = useSearch()
	const {handleNavigate, curLocation, isOpenRecommend, setOpenRecommend} = useEvent()
	const [searchingDatas, setSearchingDatas] = useState([])


	useEffect(() => {
		if(input){
			const trimmed5List = searchList.slice(0,5)
			const boldedDatas = boldMaker(input, trimmed5List)
			setSearchingDatas(boldedDatas)
			setOpenRecommend(true)
		}
	}, [searchList])
	

	return (
    <Container>
      <SearchBox 
				input={input}
				handleNavigate={handleNavigate}
				onChangeInput={onChangeInput}
			/>
			{isOpenRecommend &&
			<Recommendation 
				input ={input}
				searchingDatas={searchingDatas}
				curLocation={curLocation}
			/>}

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

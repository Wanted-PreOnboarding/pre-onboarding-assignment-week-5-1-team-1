import React from 'react';
import styled from 'styled-components';
import RecommendItem from './RecommendItem';

function Recommendation({input, searchingDatas, curLocation}) {
  if(searchingDatas?.length === 0 && input !== ""){
    return (
      <Container>
        <RecommendItem text={'검색어 없음'} />
      </Container>
    )
  }

  return (
    <Container>
      {searchingDatas?.map((data, index) => {
				const splitedArr = data.split("<b>")
        const randomNum = Math.random()* 1000
        let isActive = false
        if(curLocation === index){
          isActive = true
        }
        return <RecommendItem key={randomNum} splitedArr={splitedArr}isActive={isActive}/>
			}
			)}
    </Container>
  );
}
export default Recommendation;

const Container = styled.div`
  margin-top: 0.5rem;
  width: 28rem;
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
`;

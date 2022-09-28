import React from 'react';
import styled from 'styled-components';
import RecommendItem from './RecommendItem';

function Recommendation({searchingDatas, curLocation}) {
  return (
    <Container>
      {searchingDatas?.map((data, index) => {
				const splitedArr = data.split("<b>")
        let isActive = false
        if(curLocation === index){
          isActive = true
        }
        return <RecommendItem splitedArr={splitedArr}isActive={isActive}/>
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

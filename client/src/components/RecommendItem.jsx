import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

function RecommendItem({ splitedArr, isActive, text }) {

  if(!splitedArr && !isActive){
    return (
      <Container isActive={isActive}>
      <StyledSearch />
        {text}
      </Container>
    )
  }

  return (
    <Container isActive={isActive}>
      <StyledSearch />
        <span>{splitedArr[0]}</span>
        <b>{splitedArr[1]}</b>
        <span>{splitedArr.slice(2)}</span>
    </Container>
  );
}
export default RecommendItem;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${({ isActive }) => (isActive ? `#eee` : `white`)};
`;
const StyledSearch = styled(BiSearch)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`;

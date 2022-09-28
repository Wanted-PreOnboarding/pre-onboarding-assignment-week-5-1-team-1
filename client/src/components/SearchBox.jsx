import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

function SearchBox() {
  return (
    <Container>
      <StyledSearch />
      <Input />
      <Button>검색</Button>
    </Container>
  );
}
export default SearchBox;

const Container = styled.div`
  margin-top: 10%;
  background-color: white;
  width: 28rem;
  height: 4rem;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledSearch = styled(BiSearch)`
  width: 4rem;
  font-size: 2rem;
  position: absolute;
  left: 0;
`;
const Input = styled.input`
  width: 100%;
  margin: 0 4.5rem 0 3rem;
  padding: 1rem;
  border: none;
  font-size: 1.5rem;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  width: 5em;
  height: 100%;
  position: absolute;
  right: 0;
  border: none;
  background-color: #357ae1;
  font-size: 1rem;
  font-weight: bold;
  color: white;
`;

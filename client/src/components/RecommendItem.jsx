import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

function RecommendItem({ text }) {
  return (
    <Container>
      <StyledSearch />
      {text}
    </Container>
  );
}
export default RecommendItem;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
`;
const StyledSearch = styled(BiSearch)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`;

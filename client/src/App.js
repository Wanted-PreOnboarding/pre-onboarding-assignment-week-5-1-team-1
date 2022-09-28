import React from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';
import Recommendation from './components/Recommendation';

function App() {
  return (
    <Container>
      <SearchBox />
      <Recommendation />
    </Container>
  );
}
export default App;

const Container = styled.div`
  background-color: #d0e8fd;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    box-sizing: border-box;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

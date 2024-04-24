import { css } from '@emotion/react';

export const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  html {
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    all: unset;
    color: #3a72b4;
    cursor: pointer;
    background: #b3d6ff;
  }

  input {
    all: unset;
    cursor: text;
  }
`;

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
    color: #a788cf;
    cursor: pointer;
    background: #e4cfff;
  }

  input {
    all: unset;
    cursor: text;
  }
`;

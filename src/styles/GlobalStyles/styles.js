import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Dosis', sans-serif;
    text-transform: uppercase;
  }

  html {
    scroll-behavior: smooth;
  }
  /* ::selection {
    color: #fff;
    background-color: #d74430;
  }
  ::-webkit-scrollbar-track {
    background-color: #2d2d2d;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #d74430;
  } */

  body {
    background: #020D18;
  }

  img {
    user-select: none;
    pointer-events: none;
  }
`
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
    scroll-behavior: ${({ scroll }) => scroll || 'smooth'};
  }
  ::-webkit-scrollbar-track {
    background-color: #020D18;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #0F2133;
  }
                                             
  body {
    background: #020D18;
    overflow: ${({ overflow }) => overflow || 'auto'};
  }

  img {
    user-select: none;
    pointer-events: none;
  }
`
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;


  }  
  a {
    text-decoration: none;
    color: inherit;
  }
  li {
    list-style: none;
  }

    body {
      font-family: 'Open Sans', sans-serif;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      box-sizing: border-box;
      background: ${({ theme: { colors } }) => colors.body};
    }
`

export default GlobalStyle

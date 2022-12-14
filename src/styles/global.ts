import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Times New Roman", Times, serif;
  }

  :root{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    // transition: all 1s ease 0s, transform 1s ease 0s;
    transition: all 0.3s linear;
    background-color: ${(props) => props.theme.background.primary};
  }

`;
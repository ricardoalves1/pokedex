import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  .bg-image {
    width: 100%;
    height: 100%;
    position: fixed;
    filter: blur(4px);
    z-index: -1;
    background-position: bottom;
    background-repeat: repeat-x;
    background-image: url('/background.png');
  }
`

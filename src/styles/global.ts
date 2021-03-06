import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
 :root{
//colors   
  --highlight: #14c6d7;
  --background: #030518;
  --white: #eeeeee;

//max-width
  --container: 100rem;

//font
  --small:1.5rem;
  --medium: 3rem;
  --large: 5rem;
 }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    background: var(--background);
    color: var(--white);
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell,'Open Sans', 'Helvetica Neue', sans-serif
  }

  p,a{
    font-size: 2rem;
    line-height: var(--medium);
  }

  a{
    color: var(--highlight);
  }
`

export default GlobalStyles

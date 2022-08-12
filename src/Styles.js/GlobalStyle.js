import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Advent+Pro:wght@300&family=Amatic+SC:wght@700&family=BIZ+UDPMincho&family=Caveat&family=Fredoka+One&family=Roboto+Slab:wght@200&family=Text+Me+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Advent+Pro:wght@300&family=Amatic+SC:wght@700&family=BIZ+UDPMincho&family=Caveat&family=Dancing+Script:wght@600&family=Fredoka+One&family=Roboto+Slab:wght@200&family=Text+Me+One&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    background: #fff;
    color: hsl(192, 100%, 9%);
    font-family: 'Caveat', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
  }

`
export default GlobalStyles;
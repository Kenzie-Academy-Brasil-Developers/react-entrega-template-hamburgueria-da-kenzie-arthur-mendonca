import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


:root {
  /* Brand Colors */
  --color-1: #27ae60;
  --color-2: #93d7af;
  --color-3: #eb5757;
  /* Grey Colors */
  --grey0: #0a0c0d;
  --grey1: #212529;
  --grey2: #495057;
  --grey3: #868e96;
  --grey4: #dee2e6;
  --grey5: #f8f9fa;
  --grey-opacity-1: rgba(33, 37, 41, 0.5);
  /* Feedback Palette */
  --like: #d7443e;
  /* Font-size */
  --title1-size: 38px;
  --title1-weight: bold;
  --title1-lineheight: 40px;
  --title2-size: 22px;
  --title2-weight: bold;
  --title2-lineheight: 24px;
  --title3-size: 16px;
  --title3-weight: bold;
  --title3-lineheight: 24px;
  --title4-size: 12px;
  --title4-weight: bold;
  --title4-lineheight: 24px;
  --headline-size: 16px;
  --headline-weight: normal;
  --body-size: 12px;
  --body-weigth: normal;
}
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
button,
span,
html {
  font-family: "Inter", sans-serif;
}

// RESET

html {
  /* box-sizing: border-box; */
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  /* height: auto; */
}

`;

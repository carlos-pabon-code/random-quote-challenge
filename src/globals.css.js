import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    //Fonts
    --paragraph: 'Montserrat', sans-serif;
    --footer: 'Raleway', sans-serif;
    //Colors
    --yellow: #F7DF94;
    --black: #000000;
    --white: #F2F2F2;
    --dark-gray: #333333;
    --gray: #4F4F4F;
    --light-gray: #828282;
}

.lds-dual-ring {
  display: block;
  width: 40px;
  height: 40px;
  text-align: center;
  margin: 0 auto 2rem auto;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 34px;
  height: 34px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid var(--yellow);
  border-color: var(--yellow) transparent var(--yellow) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


`;

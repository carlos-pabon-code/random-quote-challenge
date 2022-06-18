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
    --footer: font-family: 'Raleway', sans-serif;
    //Colors
    --yellow: #F7DF94;
    --black: #000000;
    --white: #F2F2F2;
    --dark-gray: #333333;
    --gray: #4F4F4F;
    --light-gray: #828282;
}

`;

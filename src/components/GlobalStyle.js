import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
}

body{
    background:#124;
    color:#fff;
    font-family:'Ubuntu','Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    overflow-x:hidden;
}

button{
    background:transparent;
    padding:1rem 2rem;
    font-size:1.1.rem;
    cursor: pointer;
    font-weight:bold;
    border:2px solid #23d997;
    transition:all 0.5s ease;
    color:#fff;
    &:hover{
        background-color:#23d997;
        color:white;
    }
}
p{
    padding:3rem 0rem;
    color:#ccc;
    font-size:1.4rem;
    line-height:150%normal;
}
h2{
    font-weight:lighter;
    font-size:2.5rem;
}
h3{
    color:white;
}
h4{
    font-weight:bold;
    font-size:2rem;
}
span{
    font-weight:bold;
    color:#23d997
}
a{
    font-size:1.1.rem
}

`;

export default GlobalStyle;

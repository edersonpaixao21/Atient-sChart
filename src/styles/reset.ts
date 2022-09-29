import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root{
        --color-primary: #0B8899;

        --gray-100: #D9D9D9;
    }
    
    body, div, input, label, form, span, h1, h2, h3, p, button, figure, main, header, ul, li, aside{
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    button{
        cursor: pointer;
    }
    ul,ol{
        list-style: none;
    }
`;

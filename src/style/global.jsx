import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    input, textarea, select {
        outline: 0;
    }

    input {
        border: none;
        padding-left: 20px;
        
        width: 70%;
        height: 30px;

        border-radius: 50px;
    }

    button {
        border: none
    }

    label {
        display: flex;
        width: 70%;
    }

    h1, ul, li {
        color: black;
        font-weight: 800;
        list-style-type: none;
    }

    body {
        display: flex;

        align-items: flex-start;
    }

    :root {
        --color-primary-orange: #ffa24d;
        --color-second-grey1: #f9f9f9;
        --color-second-grey2: #8d8d8d44;

        --color-hover-button: red;
        --color-success-button: #00ce00;

        --color-font-white: #ffffff;
        --color-font-black1: #000000
    }
`;

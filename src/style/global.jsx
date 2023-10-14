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
`;

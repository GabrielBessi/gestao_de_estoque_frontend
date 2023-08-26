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

`;

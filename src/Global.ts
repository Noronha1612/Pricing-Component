import { createGlobalStyle } from 'styled-components';

export const GlobalStyleComponent = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Manrope', sans-serif;
    }

    button, input, text-area {
        outline: none;
    }

    button, a {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
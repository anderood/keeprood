import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #f0f2f5;
        --blue: #5429cc;
        --blue-ligth: #6933ff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background);
    }

    body, input textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    .overlay {
        background: rgba(0,0,0,0.5);

        position: fixed;
        top: 0;
        margin: 0;
        left: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .Modal {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }
`;
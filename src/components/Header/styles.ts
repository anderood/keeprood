import iconSearch from '../../assets/search.png';

import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem; 

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        color: #fff;
        font-size: 2.5rem;
    }

    input {
        width: 37.5rem;
        height: 2.625rem;
        border-radius: 5px;
        border: 0;
        background-color: #c3c3c3;
        padding: 1rem 0 1rem 2.5rem;
        background-image: url(${iconSearch});
        background-repeat: no-repeat;
        background-position: 0.563rem, 0 0.563rem, 1.25rem;
    }

    button {
       font-size: 1rem;
       color: #fff;
       background-color: var(--blue-ligth);
       border: 0;
       padding: 0 2rem;
       border-radius: 0.25rem;
       height: 3rem;

       transition: filter 0.2s;

       &:hover {
           filter: brightness(0.9);
       }

    }
`;

export const Form = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }
    }

    textarea {
        width: 30rem;
        height: 266px;

        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;
        background: #e7e9ee;
        padding: 20px 0 0 24px;

        resize: none;

        margin-top: 1rem;

        &::placeholder {
            color: var(--text-body);
        }
    }

    button {
        width: 100%;
        padding: 0% 1.5rem;
        height: 4rem;
        margin-top: 1.5rem;

        background: #33CC95;
        border-radius: 0.25rem;
        border: 0;

        color: #fff;
        font-size: 1rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }

    }
`;
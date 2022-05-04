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
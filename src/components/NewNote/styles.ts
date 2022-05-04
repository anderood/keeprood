import styled from "styled-components";

export const Container = styled.header``;

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
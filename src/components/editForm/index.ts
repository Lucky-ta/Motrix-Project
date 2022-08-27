import styled from 'styled-components';

export const EditFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 8px;
`;

export const EditFormInput = styled.input`
    margin-top: 4em;
    height: 5em;
    width: 60%;
    background: none;
    border: none;
    background-color: white;
    border-radius: 10px;
    margin-left: 2em;
    padding-left: 2em;

    font-size: 1em;
    font-weight: 700;
`;

export const EditFormTextarea = styled.textarea`
    margin-top: 5em;
    margin-left: 2em;
    border-radius: 10px;
    width: 80%;
    height: 20em;
    background: none;
    border: none;
    background-color: white;
    border-radius: 10px;    
    font-size: 1em;
    font-weight: 700;
    padding-left: 2em;
    padding-top: 2em;

`;

export const EditFormButton = styled.button`
    position: absolute;
    right: 1em;
    font-size: 1.6em;
    background: none;
    border: none;
    background-color: #50D050;
    color: white;
    padding: 0.6em;
    border-radius: 10px;
    top: 4em;
    right: 0.4em;

    &&:hover {
        color: #50D050;
        background-color: white;
        border: 1px solid #50D050;

        cursor: pointer;
    }

`;

export const EditFormLabel = styled.label`
    color: whitesmoke;
    padding-left: 1.3em;
    font-size: 1.8em;
    font-weight: 700;

    transform: translate(0em, 2em);
`;

export const EditFormReturnButton = styled.button`
    background: none;
    border: none;
    font-size: 1.4em;
    font-weight: 600;
    margin-top: 1em;
    align-self: flex-start;
    padding-left: 2em;

    &&:hover {
        cursor: pointer;
        color: #50D050;
    }
`;

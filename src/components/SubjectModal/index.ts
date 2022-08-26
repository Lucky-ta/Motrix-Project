import styled from 'styled-components';

export const SubjectModalContainer = styled.form`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #696969;

    height: 25em;
    width: 100%;
    max-width: 35em;
    min-width: 10em;
    border-radius: 8px;

    padding-left: 1em;
    padding-right: 1em;


`;

export const SubjectModalInput = styled.input`
    border: none;
    border-radius: 6px;
    width: 100%;
    height: 3.5em;
    padding-left: 1em;
    margin-top: 2em;
    max-width: 26em;
`;

export const SubjectModalTextArea = styled.textarea`
    margin: auto;
    width: 100%;
    height: 18em;
    border-radius: 6px;
    resize: none;
    padding-left: 1em;
    padding-top: 1em;
    margin-top: 1.6em;
`;

export const SubjectModalButton = styled.button`
    position: absolute;
    bottom: 1em;
    right: 1em;

    background: none;
    background-color: green;
    border: none;
    color: white;
    font-size: 1em;
    padding: 0.6em;
    border-radius: 6px;

    &&:hover {
        cursor: pointer;
        color: green;
        background-color: white;
        border: 1px solid green;
    }
`;

export const CloseModalButton = styled.button`
    position: absolute;
    right: 0;
    background: none;
    border: none;
    padding-top: 0.2em;
    padding-right: 0.2em;
    font-size: 2.6em;

    color: white;

    
    &&:hover {
        color: red;
        cursor: pointer;
    }

    @media screen and (max-width: 420px) {
        bottom: 0;
        left: 0;
        padding-right: 6em;
        color: red;

        &&:hover {
        color: white;
    }
}
`;

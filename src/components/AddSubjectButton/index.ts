import styled from 'styled-components';

const AddSubjectButton = styled.button`
    display: flex;
    background: none;
    border: none;

    margin-left: 0.6em;
    margin-bottom: 0.2em;
    font-size: 3em;
    border-radius: 99em;

    &&:hover {
        cursor: pointer;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`;

export default AddSubjectButton;

import styled from 'styled-components';

export const MenuOptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    right: 1em;
    gap: 0.6em;
    width: 1em;
`;

export const MenuOptionsButtons = styled.button`
    background: none;
    border: none;
    font-size: 0.8em;
    font-weight: 600;

    &&:hover {
        cursor: pointer;
        color: green;
    }
`;

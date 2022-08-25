import styled from 'styled-components';

export const SubjectCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    width: 100%;
`;

export const SubjectCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.8em;
    color: #505050;
`;

export const SubjectCardHeaderTitle = styled.h2`
    border-left: 10px solid #50D050;
    padding-left: 0.6em;

    line-height: 0.8em;
`;

export const SubjectCardDescriptionContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const SubjectCardHeaderDescription = styled.p`
    width: 100%;
    height: 100%;
    padding-left: 2em;
    padding-right: 2em;

    padding-bottom: 1em;
    word-break: break-all;
`;

export const SubjectCardDotsOptions = styled.button`
    background: none;
    border: none;
    height: 2em;
    padding-right: 2em;

    &&:hover {
        cursor: pointer;
    }
`;

import styled from 'styled-components';

export const ContentName = styled.h2`
    text-align: center;
    margin-bottom: 1.2em;

    font-weight: 800;
    color: #505050;
`;

export const SubjectCardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2em;

    margin-left: 1em;
    margin-right: 1em;

    @media screen and (min-width: 700px) {
        grid-template-columns: 1fr 1fr;
}
`;

export const GlobalFade = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

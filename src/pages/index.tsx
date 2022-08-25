import React from 'react';
import AddSubjectsButton from '../components/AddSubjectButton/AddSubjectsButton';
import Header from '../components/Header/Header';
import SubjectCard from '../components/SubjectCard/SubjectCard';
import { ContentName, SubjectCardsContainer } from '../styles';

function Home() {
  const subjectMock = {
    name: 'MRU',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, accusamus in corporis soluta iure, enim aliquam recusandae reiciendis provident corrupti qui labore! Culpa consequuntur accusantium nam obcaecati voluptas, consequatur quia.',
    timestamps: '25/08/2022',
  };
  return (
    <div>
      <Header contentTitle="Física" />
      <ContentName>Matérias</ContentName>
      <AddSubjectsButton />
      <SubjectCardsContainer>
        <SubjectCard subject={subjectMock} />
        <SubjectCard subject={subjectMock} />
        <SubjectCard subject={subjectMock} />
        <SubjectCard subject={subjectMock} />
      </SubjectCardsContainer>
    </div>
  );
}

export default Home;

import React from 'react';
import AddSubjectsButton from '../components/AddSubjectButton/AddSubjectsButton';
import Header from '../components/Header/Header';
import SubjectCard from '../components/SubjectCard/SubjectCard';
import ContentName from '../styles';

function Home() {
  const subjectMock = {
    name: 'MRU',
    description: 'Uma matéria do primeiro ano',
    timestamps: '25/08/2022',
  };
  return (
    <div>
      <Header contentTitle="Física" />
      <ContentName>Matérias</ContentName>
      <div>
        <SubjectCard subject={subjectMock} />
      </div>
      <AddSubjectsButton />
    </div>
  );
}

export default Home;

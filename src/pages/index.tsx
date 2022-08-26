import React, { useContext } from 'react';
import AddSubjectsButton from '../components/AddSubjectButton/AddSubjectsButton';
import Header from '../components/Header/Header';
import SubjectCard from '../components/SubjectCard/SubjectCard';
import SubjectModal from '../components/SubjectModal/SubjectModal';
import MyContext from '../contexts/MyContext';
import { ContentName, SubjectCardsContainer } from '../styles';

function Home() {
  const { isModalVisible } = useContext(MyContext);
  const subjectMock = {
    name: 'MRU',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, accusamus in corporis soluta iure, enim aliquam recusandae reiciendis provident corrupti qui labore! Culpa consequuntur accusantium nam obcaecati voluptas, consequatur quia.',
    timestamps: '25/08/2022',
  };
  return (
    <div className={isModalVisible ? 'fade' : ''}>
      <Header contentTitle="Física" />
      <ContentName>Matérias</ContentName>
      <AddSubjectsButton />
      <SubjectCardsContainer>
        <SubjectCard subject={subjectMock} />
        <SubjectCard subject={subjectMock} />
        <SubjectCard subject={subjectMock} />
        <SubjectCard subject={subjectMock} />
      </SubjectCardsContainer>
      {isModalVisible && (<SubjectModal />)}
    </div>
  );
}

export default Home;

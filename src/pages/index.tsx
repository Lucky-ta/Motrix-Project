import { GetServerSideProps } from 'next';
import React, { useContext } from 'react';
import AddSubjectsButton from '../components/AddSubjectButton/AddSubjectsButton';
import Header from '../components/Header/Header';
import SubjectCard from '../components/SubjectCard/SubjectCard';
import SubjectModal from '../components/SubjectModal/SubjectModal';
import MyContext, { SubjectShape } from '../contexts/MyContext';
import { getAllSubjects } from '../services/subjectApis';
import { ContentName, GlobalFade, SubjectCardsContainer } from '../styles';

interface HomePropsShape {
  data: SubjectShape[];
}

function Home({ data }: HomePropsShape) {
  const { isModalVisible } = useContext(MyContext);

  return (
    <div>
      <Header contentTitle="Física" />
      <ContentName>Matérias</ContentName>
      <AddSubjectsButton />
      <SubjectCardsContainer>
        {data.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </SubjectCardsContainer>
      {isModalVisible && <SubjectModal />}
      {isModalVisible && <GlobalFade />}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const subjects = await getAllSubjects();
  return {
    props: {
      data: subjects,
    },
  };
};

export default Home;

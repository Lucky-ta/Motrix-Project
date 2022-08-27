import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import EditForm from '../../components/editForm/EditForm';
import Header from '../../components/Header/Header';
import { SubjectShape } from '../../contexts/MyContext';
import { getAllSubjects, getSubjectById } from '../../services/subjectApis';

interface SubjectDetailsPropsShape {
  data: SubjectShape;
}

function SubjectDetails({ data }: SubjectDetailsPropsShape) {
  return (
    <div>
      <Header contentTitle="Física" />
      <EditForm subject={data} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const subjects = await getAllSubjects();

  const paths = subjects.map((subject: SubjectShape) => ({
    params: {
      id: JSON.stringify(subject.id),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { id } = context.params;

  const subject = await getSubjectById(id);

  return {
    props: {
      data: subject,
    },
  };
};

export default SubjectDetails;

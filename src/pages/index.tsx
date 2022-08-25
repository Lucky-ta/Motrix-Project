import React from 'react';
import AddSubjectsButton from '../components/addSubjectsButton';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header contentTitle="Física" />
      <h2>Matérias</h2>
      <AddSubjectsButton />
    </div>
  );
}

export default Home;

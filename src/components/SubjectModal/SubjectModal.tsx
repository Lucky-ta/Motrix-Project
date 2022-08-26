import React from 'react';
import { SubjectModalContainer } from '.';

function SubjectModal() {
  const createSubject = () => {
    console.log('materia criada!');
  };

  return (
    <SubjectModalContainer>
      <input placeholder="Nome da matéria" type="text" />
      <textarea placeholder="Descrição" name="" id="" cols={30} rows={10} />
      <button onClick={createSubject} type="button">Adicionar matéria</button>
    </SubjectModalContainer>
  );
}

export default SubjectModal;

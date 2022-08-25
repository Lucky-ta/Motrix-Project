import React from 'react';

function SubjectModal() {
  const createSubject = () => {
    console.log('materia criada!');
  };

  return (
    <form>
      <input placeholder="Nome da matéria" type="text" />
      <textarea placeholder="Descrição" name="" id="" cols={30} rows={10} />
      <button onClick={createSubject} type="button">Adicionar matéria</button>
    </form>
  );
}

export default SubjectModal;

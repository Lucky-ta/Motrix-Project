import React, { useContext } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {
  CloseModalButton,
  SubjectModalButton,
  SubjectModalContainer,
  SubjectModalInput,
  SubjectModalTextArea,
} from '.';
import MyContext from '../../contexts/MyContext';

function SubjectModal() {
  const { setIsModalVisible } = useContext(MyContext);
  const createSubject = () => {
    console.log('materia criada!');
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <SubjectModalContainer>
      <SubjectModalInput placeholder="Nome da matéria" type="text" />
      <CloseModalButton onClick={closeModal} type="button">
        <AiOutlineCloseCircle />
      </CloseModalButton>
      <SubjectModalTextArea
        placeholder="Descrição"
        name=""
        id=""
        cols={30}
        rows={10}
      />
      <SubjectModalButton onClick={createSubject} type="button">
        Adicionar matéria
      </SubjectModalButton>
    </SubjectModalContainer>
  );
}

export default SubjectModal;

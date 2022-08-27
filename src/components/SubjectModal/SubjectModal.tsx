import React, { useContext, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {
  CloseModalButton,
  SubjectModalButton,
  SubjectModalContainer,
  SubjectModalInput,
  SubjectModalTextArea,
} from '.';
import MyContext from '../../contexts/MyContext';
import { createSubject } from '../../services/subjectApis';

function SubjectModal() {
  const [subject, setSubject] = useState({ name: '', description: '' });
  const { setIsModalVisible } = useContext(MyContext);

  const createNewSubject = async () => {
    const response = await createSubject(subject);
    if (response.message) {
      window.alert('Não foi possível criar');
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleForomData = ({ target }: any) => {
    setSubject({
      ...subject,
      [target.id]: target.value,
    });
  };

  return (
    <SubjectModalContainer>
      <SubjectModalInput
        onChange={(e) => handleForomData(e)}
        id="name"
        placeholder="Nome da matéria"
        type="text"
      />
      <CloseModalButton onClick={closeModal} type="button">
        <AiOutlineCloseCircle />
      </CloseModalButton>
      <SubjectModalTextArea
        placeholder="Descrição"
        name=""
        id="description"
        cols={30}
        rows={10}
        onChange={(e) => handleForomData(e)}
      />
      <SubjectModalButton onClick={createNewSubject} type="button">
        Adicionar matéria
      </SubjectModalButton>
    </SubjectModalContainer>
  );
}

export default SubjectModal;

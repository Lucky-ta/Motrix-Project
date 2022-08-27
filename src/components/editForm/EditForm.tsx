import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  EditFormButton,
  EditFormContainer,
  EditFormInput,
  EditFormLabel,
  EditFormReturnButton,
  EditFormTextarea,
} from '.';
import { SubjectShape } from '../../contexts/MyContext';
import { updateSubject } from '../../services/subjectApis';

interface EditFormPropsShape {
  subject: SubjectShape;
}

function EditForm({ subject }: EditFormPropsShape) {
  const router = useRouter();
  const [editSubject, setEditSubject] = useState({ name: '', description: '' });
  const saveSubjectChanges = async () => {
    const response = await updateSubject(subject.id, editSubject);
    if (response.message) {
      window.alert('Informações inválidas!');
    }
  };

  const handleForomData = ({ target }: any) => {
    setEditSubject({
      ...editSubject,
      [target.id]: target.value,
    });
  };

  const redirectToHomePage = () => {
    router.push('/');
  };

  return (
    <EditFormContainer>
      <EditFormReturnButton onClick={redirectToHomePage} type="button">
        Voltar
      </EditFormReturnButton>
      <EditFormLabel htmlFor="name">Nome</EditFormLabel>
      <EditFormInput
        id="name"
        onChange={(e) => handleForomData(e)}
        type="text"
        defaultValue={subject.name}
      />
      <EditFormLabel htmlFor="description">Descrição</EditFormLabel>
      <EditFormTextarea
        onChange={(e) => handleForomData(e)}
        id="description"
        cols={30}
        rows={10}
        defaultValue={subject.description}
      />
      <EditFormButton type="button" onClick={saveSubjectChanges}>
        Salvar
      </EditFormButton>
    </EditFormContainer>
  );
}

export default EditForm;

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
import redirectToHomePage from '../../utils/redirectToHomePage';

interface EditFormPropsShape {
  subject: SubjectShape;
}

function EditForm({ subject }: EditFormPropsShape) {
  const router = useRouter();
  const [editSubject, setEditSubject] = useState({ name: '', description: '' });

  const formatEditSubject = () => {
    if (editSubject.name.length === 0) editSubject.name = subject.name;
    if (editSubject.description.length === 0) {
      editSubject.description = subject.description;
    }
  };

  const saveSubjectChanges = async () => {
    formatEditSubject();
    const response = await updateSubject(subject.id, editSubject);
    if (response.message) {
      window.alert('Informações inválidas!');
    } else {
      redirectToHomePage(router);
    }
  };

  const handleForomData = ({ target }: any) => {
    setEditSubject({
      ...editSubject,
      [target.id]: target.value,
    });
  };

  return (
    <EditFormContainer>
      <EditFormReturnButton onClick={() => redirectToHomePage(router)} type="button">
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

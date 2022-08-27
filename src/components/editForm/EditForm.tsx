import React, { useState } from 'react';
import {
  EditFormButton,
  EditFormContainer,
  EditFormInput,
  EditFormLabel,
  EditFormTextarea,
} from '.';
import { SubjectShape } from '../../contexts/MyContext';

interface EditFormPropsShape {
  subject: SubjectShape;
}

function EditForm({ subject }: EditFormPropsShape) {
  const [editSubject, setEditSubject] = useState({});
  const saveSubjectChanges = () => {
    console.log('salvo mudanças', editSubject);
  };

  const handleForomData = ({ target }: any) => {
    setEditSubject({
      ...editSubject,
      [target.id]: target.value,
    });
  };

  return (
    <EditFormContainer>
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

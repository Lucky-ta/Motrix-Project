import React from 'react';
import { FcPlus } from 'react-icons/fc';
import AddSubjectButton from '.';

function AddSubjectsButton() {
  const openSubjectForm = () => {
    console.log('Card open');
  };

  return (
    <AddSubjectButton onClick={openSubjectForm} type="button">
      <FcPlus />
    </AddSubjectButton>
  );
}

export default AddSubjectsButton;

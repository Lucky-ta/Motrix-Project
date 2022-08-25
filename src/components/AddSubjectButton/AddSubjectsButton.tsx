import React from 'react';

function AddSubjectsButton() {
  const openSubjectForm = () => {
    console.log('Card open');
  };

  return <button onClick={openSubjectForm} type="button">+</button>;
}

export default AddSubjectsButton;

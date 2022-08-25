import React from 'react';

function AddSubjectsButton() {
  const openNewSubjectCard = () => {
    console.log('Card open');
  };

  return <button onClick={openNewSubjectCard} type="button">+</button>;
}

export default AddSubjectsButton;

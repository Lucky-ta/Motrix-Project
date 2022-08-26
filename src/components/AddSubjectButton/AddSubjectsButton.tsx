import React, { useContext } from 'react';
import { FcPlus } from 'react-icons/fc';
import AddSubjectButton from '.';
import MyContext from '../../contexts/MyContext';

function AddSubjectsButton() {
  const { isModalVisible, setIsModalVisible } = useContext(MyContext);
  const openSubjectForm = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <AddSubjectButton onClick={openSubjectForm} type="button">
      <FcPlus />
    </AddSubjectButton>
  );
}

export default AddSubjectsButton;

import React from 'react';
import { MenuOptionsButtons, MenuOptionsContainer } from '.';

interface MenuOptionsPropsShape {
  subjectId: number;
}

function MenuOptions({ subjectId }: MenuOptionsPropsShape) {
  const editSubject = () => {
    console.log('EDIT PAGE');
  };

  const deleteSubject = () => {
    console.log('REQUEST DELETE', subjectId);
  };

  return (
    <MenuOptionsContainer>
      <MenuOptionsButtons onClick={editSubject} type="button">
        Editar
      </MenuOptionsButtons>
      <MenuOptionsButtons onClick={deleteSubject} type="button">
        Excluir
      </MenuOptionsButtons>
    </MenuOptionsContainer>
  );
}

export default MenuOptions;

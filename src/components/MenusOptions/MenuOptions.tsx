import { useRouter } from 'next/router';
import React from 'react';
import { MenuOptionsButtons, MenuOptionsContainer } from '.';
import { SubjectShape } from '../../contexts/MyContext';

interface MenuOptionsPropsShape {
  subject: SubjectShape;
}

function MenuOptions({ subject }: MenuOptionsPropsShape) {
  const router = useRouter();
  const editSubject = () => {
    router.push(`/subject/${subject.id}`);
  };

  const deleteSubject = () => {
    console.log('REQUEST DELETE', subject.id);
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

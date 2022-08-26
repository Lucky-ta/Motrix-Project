import { useRouter } from 'next/router';
import React from 'react';
import { MenuOptionsButtons, MenuOptionsContainer } from '.';

interface MenuOptionsPropsShape {
  subjectId: number;
}

function MenuOptions({ subjectId }: MenuOptionsPropsShape) {
  const router = useRouter();
  const editSubject = () => {
    router.push(`/subject/${subjectId}`);
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

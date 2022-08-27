import { useRouter } from 'next/router';
import React from 'react';
import { MenuOptionsButtons, MenuOptionsContainer } from '.';
import { SubjectShape } from '../../contexts/MyContext';
import { deleteSubject } from '../../services/subjectApis';
import redirectToHomePage from '../../utils/redirectToHomePage';

interface MenuOptionsPropsShape {
  subject: SubjectShape;
}

function MenuOptions({ subject }: MenuOptionsPropsShape) {
  const router = useRouter();
  const editSubject = () => {
    router.push(`/subject/${subject.id}`);
  };

  const excludeSubject = async () => {
    const response = await deleteSubject(subject.id);
    if (response.message) {
      window.alert('Não foi possível excluir este item');
    } redirectToHomePage(router);
  };

  return (
    <MenuOptionsContainer>
      <MenuOptionsButtons onClick={editSubject} type="button">
        Editar
      </MenuOptionsButtons>
      <MenuOptionsButtons onClick={excludeSubject} type="button">
        Excluir
      </MenuOptionsButtons>
    </MenuOptionsContainer>
  );
}

export default MenuOptions;

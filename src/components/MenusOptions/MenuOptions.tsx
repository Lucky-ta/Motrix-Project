import React from 'react';
import { MenuOptionsButtons, MenuOptionsContainer } from '.';

function MenuOptions() {
  return (
    <MenuOptionsContainer>
      <MenuOptionsButtons type="button">Editar</MenuOptionsButtons>
      <MenuOptionsButtons type="button">Excluir</MenuOptionsButtons>
    </MenuOptionsContainer>
  );
}

export default MenuOptions;

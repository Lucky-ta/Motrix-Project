import React from 'react';
import HeaderContainer from '.';

interface HeaderPropsShape {
  contentTitle: string;
}

function Header({ contentTitle }:HeaderPropsShape) {
  return (
    <HeaderContainer>
      <h1>{contentTitle}</h1>
    </HeaderContainer>
  );
}

export default Header;

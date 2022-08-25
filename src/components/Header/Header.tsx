import React from 'react';

interface HeaderPropsShape {
  contentTitle: string;
}

function Header({ contentTitle }:HeaderPropsShape) {
  return (
    <div>
      <h1>{contentTitle}</h1>
    </div>
  );
}

export default Header;

/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import MyContext from './MyContext';

interface MyProviderPropsShape {
    children: React.ReactNode
}

function MyProvider({ children }:MyProviderPropsShape) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const data = {
    isModalVisible,
    setIsModalVisible,
  };

  return (
    <MyContext.Provider value={data}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;

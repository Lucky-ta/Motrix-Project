/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import MyContext, { subjectIniitalValue } from './MyContext';

interface MyProviderPropsShape {
    children: React.ReactNode
}

function MyProvider({ children }:MyProviderPropsShape) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(subjectIniitalValue);

  const data = {
    isModalVisible,
    setIsModalVisible,
    currentContent,
    setCurrentContent,
  };

  return (
    <MyContext.Provider value={data}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;

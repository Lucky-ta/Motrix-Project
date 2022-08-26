/* eslint-disable no-unused-vars */
import { createContext } from 'react';

interface MyContextShape {
    isModalVisible: boolean;
    setIsModalVisible: (value: boolean) => void;
}

const data: MyContextShape = {
  isModalVisible: false,
  setIsModalVisible: () => {},
};

const MyContext = createContext<MyContextShape>(data);

export default MyContext;

/* eslint-disable no-unused-vars */
import { createContext } from 'react';

export type SubjectShape = {
  id: number;
  name: string;
  description: string;
  timestamps: string;
}

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

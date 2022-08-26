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
  currentContent: SubjectShape;
  setCurrentContent: (value: SubjectShape) => void;
}

export const subjectIniitalValue: SubjectShape = {
  id: 0,
  name: '',
  description: '',
  timestamps: '',
};

const data: MyContextShape = {
  isModalVisible: false,
  setIsModalVisible: () => {},
  currentContent: subjectIniitalValue,
  setCurrentContent: () => {},
};

const MyContext = createContext<MyContextShape>(data);

export default MyContext;

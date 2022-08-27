import Api from './api';

export type SubjectParamsShape = {
    name: string;
    description: string;
}

const getAllSubjects = async () => {
  try {
    const response = await Api.get('/subject');
    return response.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

const getSubjectById = async (id: number) => {
  try {
    const response = await Api.get(`/subject${id}`);
    return response.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

const createSubject = async (subject: SubjectParamsShape) => {
  try {
    const response = await Api.post('/subject', subject);
    return response.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

const updateSubject = async (subjectId: number, subject: SubjectParamsShape) => {
  try {
    const response = await Api.put(`/subject/${subjectId}`, subject);
    return response.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

const deleteSubject = async (subjectId: number) => {
  try {
    const response = await Api.delete(`/subject/${subjectId}`);
    return response.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

export {
  getAllSubjects,
  getSubjectById,
  createSubject,
  updateSubject,
  deleteSubject,
};

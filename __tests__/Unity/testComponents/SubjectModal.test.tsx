import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SubjectModal from '../../../src/components/SubjectModal/SubjectModal';

describe('Test SubjectModal component', () => {
  beforeEach(() => {
    render(<SubjectModal />);
  });

  it('SubjectModal should have a subject name input', () => {
    const subjectNameInput = screen.getByPlaceholderText(/Nome da matéria/i);

    expect(subjectNameInput).toBeInTheDocument();
  });

  it('SubjectModal should have a subject text area description', () => {
    const subjectDescriptionArea = screen.getByPlaceholderText(/Descrição/i);

    expect(subjectDescriptionArea).toBeInTheDocument();
  });
});

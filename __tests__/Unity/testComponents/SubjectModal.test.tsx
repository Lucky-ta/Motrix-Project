import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SubjectModal from '../../../src/components/subjectModal';

describe('Test SubjectModal component', () => {
  beforeEach(() => {
    render(<SubjectModal />);
  });

  it('SubjectModal should have a subject name input', () => {
    const subjectNameInput = screen.getByPlaceholderText(/Subject name/i);

    expect(subjectNameInput).toBeInTheDocument();
  });

  it('SubjectModal should have a subject text area description', () => {
    const subjectDescriptionArea = screen.getByRole('textbox');

    expect(subjectDescriptionArea).toBeInTheDocument();
  });

  it('SubjectModal should have a create subject button', () => {
    const createSubjectButton = screen.getByRole('button');

    expect(createSubjectButton).toBeInTheDocument();
  });
});

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import EditForm from '../../../src/components/editForm/EditForm';

describe('Test Edit Form component', () => {
  const subjectMock = {
    id: 1,
    name: 'MRU',
    description: 'Uma matéria do primeiro ano',
    createdAt: '25/08/2022',
  };

  beforeEach(() => {
    render(<EditForm subject={subjectMock} />);
  });

  it('Edit Form should have a subject name input', () => {
    const subjectNameInput = screen.getByDisplayValue(/MRU/i);

    expect(subjectNameInput).toBeInTheDocument();
  });

  it('Edit Form should have a subject textarea', () => {
    const subjectNameTextarea = screen.getByDisplayValue(
      /Uma matéria do primeiro ano/i,
    );

    expect(subjectNameTextarea).toBeInTheDocument();
  });
});

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AddSubjectButton from '../../../src/components/AddSubjectButton/AddSubjectsButton';

describe('Test addSubjectButton component', () => {
  beforeEach(() => {
    render(<AddSubjectButton />);
  });

  it('addSubjectButton should have a button', () => {
    const AddSubjectBtn = screen.getByRole('button');

    expect(AddSubjectBtn).toBeInTheDocument();
  });
});

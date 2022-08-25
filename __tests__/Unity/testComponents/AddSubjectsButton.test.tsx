import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AddSubjectButton from '../../../src/components/addSubjectsButton';

describe('Test addSubjectButton component', () => {
  beforeEach(() => {
    render(<AddSubjectButton />);
  });

  it('Header should have title text', () => {
    const AddSubjectBtn = screen.getByRole('button');

    expect(AddSubjectBtn).toBeInTheDocument();
  });
});

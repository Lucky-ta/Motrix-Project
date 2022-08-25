import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SubjectCard from '../../../src/components/SubjectCard/SubjectCard';

const subjectMock = {
  name: 'MRU',
  description: 'Uma matéria do primeiro ano',
  timestamps: '25/08/2022',
};

describe('Test SubjectCard component', () => {
  beforeEach(() => {
    render(<SubjectCard subject={subjectMock} />);
  });

  it('SubjectCard should have a name title', () => {
    const subjectTitle = screen.getByText(/MRU/i);

    expect(subjectTitle).toBeInTheDocument();
  });

  it('SubjectCard should have a description', () => {
    const subjectDescription = screen.getByText(/Uma matéria do primeiro ano/i);

    expect(subjectDescription).toBeInTheDocument();
  });
});

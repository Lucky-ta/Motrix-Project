import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../../../src/components/Header';

describe('Test header component', () => {
  beforeEach(() => {
    render(<Header contentTitle="some title" />);
  });

  it('Header should have title text', () => {
    const header = screen.getByRole('heading');

    expect(header).toBeInTheDocument();
    expect(header.textContent).not.toHaveLength(0);
  });
});

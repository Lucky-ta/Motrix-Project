import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../../src/components/Header';

describe('Test header component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('Header should have title text', () => {
    const header = screen.getByRole('heading');

    expect(header).toBeInTheDocument();
    expect(header.textContent).not.toHaveLength(0);
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Homepage from '../components/Homepage';

describe('Homepage', () => {
  it('renders the homepage and filters items', () => {
    render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>,
    );

    const heading = screen.getByText(/aircheck/i);
    expect(heading).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText('Enter state name');
    expect(inputElement).toBeInTheDocument();

    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: 'anambra' } });
    expect(screen.getByText(/anambra/i)).toBeInTheDocument();
  });
});

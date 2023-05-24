import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {
  it('should render the header with the correct content', () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>,
    );

    fireEvent.click(screen.getByTestId('back_btn'));
    expect(screen.getByText(/aircheck/i)).toBeInTheDocument();

    const titleElement = getByText(/aircheck/i);
    expect(titleElement).toBeInTheDocument();
  });
});

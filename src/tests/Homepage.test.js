import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Homepage from '../components/Homepage';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Homepage', () => {
  beforeEach(() => {
    useSelector.mockReturnValue({
      cities: [
        {
          officialName: 'Anambra',
          Latitude: 5.53,
          Longitude: 4.66,
          Population: 10000,
        },
      ],
      details: [
        {
          components: {
            no: 10, co: 5, no2: 8, so2: 3, o3: 20,
          },
          main: { aqi: 5 },
        },
      ],
      isLoading: false,
    });
  });

  it('renders the homepage and filters items', () => {
    render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>,
    );

    const inputElement = screen.getByPlaceholderText('Enter state in Nigeria');
    expect(inputElement).toBeInTheDocument();

    expect(screen.getByTestId('card')).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: 'anambra' } });
    expect(screen.getByText(/anambra/i)).toBeInTheDocument();
  });
});

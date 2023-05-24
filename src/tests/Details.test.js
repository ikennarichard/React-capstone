import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Details from '../components/Details';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Details', () => {
  beforeEach(() => {
    useSelector.mockReturnValue({
      cities: [
        {
          officialName: 'Anambra',
          Latitude: 5.53,
          Longitude: 4.66,
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

    useDispatch.mockReturnValue(jest.fn());
  });

  test('renders the details page and displays data', () => {
    render(
      <BrowserRouter>
        <Details />
      </BrowserRouter>,
    );

    expect(screen.getByText(/Very Poor/i)).toBeInTheDocument();

    expect(useDispatch).toHaveBeenCalledTimes(1);
  });
});

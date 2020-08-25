import React from 'react';
import { render } from '@testing-library/react';
import VehiklSquares from './VehiklSquares';

it('renders nine squares', () => {
  const { getAllByTestId } = render(<VehiklSquares />);
  const squares = getAllByTestId('cell');
  expect(squares.length).toEqual(9);
});

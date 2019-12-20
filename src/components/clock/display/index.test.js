import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

test('renders the display component properly', () => {
  const date = '00:11:23';
  const { getByTestId, getByText } = render(<Display dateTime={date} />);
  const display = getByTestId('app-display');
  const h1Time = getByText(date);
  expect(display).toBeTruthy();
  expect(h1Time).toBeTruthy();
});

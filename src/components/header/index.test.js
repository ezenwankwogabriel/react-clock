import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders the header component correctly', () => {
  const { getByTestId } = render(<Header />);
  const div = getByTestId('main-app');
  expect(div).toHaveAttribute('class', 'home-bar');
});


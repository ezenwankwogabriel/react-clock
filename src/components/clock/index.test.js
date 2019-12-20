import React from 'react';
import { render } from '@testing-library/react';
import Clock from './Clock';

test('should render clock with time date set', () => {
  const {getByTestId} = render(<Clock />);
  const container = getByTestId('app-clock');
  expect(container).toBeTruthy();
});

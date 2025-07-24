// This file will contain tests for the Freestyle component.

import React from 'react';
import { render } from '@testing-library/react';
import Freestyle from '../src/Freestyle';

test('renders freestyle mode component', () => {
  const { getByText } = render(<Freestyle />);
  const linkElement = getByText(/Freestyle Mode/i);
  expect(linkElement).toBeInTheDocument();
});

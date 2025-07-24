// This file will contain tests for the Community component.

import React from 'react';
import { render } from '@testing-library/react';
import Community from '../src/Community';

test('renders community component', () => {
  const { getByText } = render(<Community />);
  const linkElement = getByText(/Community/i);
  expect(linkElement).toBeInTheDocument();
});

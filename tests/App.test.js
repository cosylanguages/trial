// This file will contain tests for the main App component.

import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/COSYlanguages/i);
  expect(linkElement).toBeInTheDocument();
});

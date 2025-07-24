// This file will contain tests for the StudyMode component.

import React from 'react';
import { render } from '@testing-library/react';
import StudyMode from '../src/StudyMode';

test('renders study mode component', () => {
  const { getByText } = render(<StudyMode />);
  const linkElement = getByText(/Study Mode/i);
  expect(linkElement).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders coverText', () => {
  render(<App />);
  const coverText = screen.getByText(/결혼합니다/i);
  expect(coverText).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App_99 from './App_99';

test('renders learn react link', () => {
  render(<App_99 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('wyświetla pozycję w menu', () => {
  render(<App />);
  const linkElement = screen.getByText("Człowiek");
  expect(linkElement).toBeInTheDocument();
});

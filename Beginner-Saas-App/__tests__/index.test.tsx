import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders the welcome message', () => {
    render(<Home />);
    expect(
      screen.getByText(/Welcome to your Next.js \+ TypeScript App!/i),
    ).toBeInTheDocument();
  });
});
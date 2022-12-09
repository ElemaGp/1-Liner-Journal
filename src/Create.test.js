import { render, screen } from '@testing-library/react';
import Create from './Create';

test('renders the word title', () => {
    render(<Create />);
    const headerElement = screen.getByText(/title/i);
    expect(headerElement).toBeInTheDocument();
});


it('renders all words Joke', () => {
    render(<Create />);
    const textElements = screen.getAllByText(/Joke/i);
    expect(textElements.length).toBe(5);
});


it('renders the word author', () => {
    render(<Create />);
    const authorTextElement = screen.getByText(/Author/i);
    expect(authorTextElement).toBeInTheDocument();
});


//use "describe block tomorrow"
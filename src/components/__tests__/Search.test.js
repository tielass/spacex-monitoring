import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

test('SearchBar component should work correctly', () => {
  const mockOnSearch = jest.fn();

  render(<SearchBar onSearch={mockOnSearch} />);

  const inputElement = screen.getByPlaceholderText('Search...');
  const buttonElement = screen.getByText('SEARCH');

  fireEvent.change(inputElement, { target: { value: 'TestQuery' } });

  expect(inputElement.value).toBe('TestQuery');

  fireEvent.click(buttonElement);

  expect(mockOnSearch).toHaveBeenCalledWith('TestQuery');

  expect(inputElement.value).toBe('');
});

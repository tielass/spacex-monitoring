import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../Search';

test('SearchBar component should work properly', () => {
  const mockOnSearch = jest.fn();

  render(<SearchBar onSearch={mockOnSearch} />);

  const inputElement = screen.getByPlaceholderText('Search...');
  const buttonElement = screen.getByText('SEARCH');

  fireEvent.change(inputElement, { target: { value: 'Search test' } });

  expect(inputElement.value).toBe('Search test');

  fireEvent.click(buttonElement);

  expect(mockOnSearch).toHaveBeenCalledWith('Search test');

  expect(inputElement.value).toBe('');
});

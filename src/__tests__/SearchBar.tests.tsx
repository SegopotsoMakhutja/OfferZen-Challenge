import React from 'react';
import { render } from '../test-utils';
import { screen, fireEvent  } from '@testing-library/react';
import { SearchBar } from '../components';

describe('Search Bar component', () => {
  
  it('renders correctly', () => {
    const onInputChange = jest.fn();
    // given
    render(<SearchBar searchValue='' handleSearch={onInputChange}/>);

    // then
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search\.\.\./i)).toBeInTheDocument();
  });

  it('should invoke onInputChange after input value changed', () => {

    const onInputChange = jest.fn();
    // given
    render(<SearchBar searchValue='' handleSearch={onInputChange}/>);


    // when
    fireEvent.change(screen.getByRole('textbox'), { target: {
      name: 'searchValue',
      value: 'testing'
    }});

    // then
    expect(onInputChange).toHaveBeenCalledWith('testing');
  });

  it('should display the search key in input according to passed props', () => {
    const onInputChange = jest.fn();
    // given
    render(<SearchBar searchValue='searching from other component' handleSearch={onInputChange}/>);
    const input = screen.getByPlaceholderText(/search\.\.\./i)

    console.log(input)
    // then
    // @ts-ignore
    expect(input.value).toBe('searching from other component');
  });
});
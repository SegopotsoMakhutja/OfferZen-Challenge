import React from 'react';
import { render } from '../test-utils';
import { screen, fireEvent } from '@testing-library/react';
import { ToggleColumns } from '../components';

describe('verify_pack.ToggleColumn', () => {
  it('renders correctly', () => {
    const onToggleColumn = jest.fn();
    // given
    render(<ToggleColumns handleClick={onToggleColumn} isChecked />);
    const toggleColumns = screen.getByText(/show archived/i)
    expect(toggleColumns).toBeInTheDocument();
  });

  const archive = false;

  it(`should invoke the onCheckboxClick callback after checkbox was clicked`, () => {
    // given
    const spy = jest.fn();
    render(<ToggleColumns isChecked handleClick={spy} />);

    // when
    const checkbox = screen.getByLabelText(/archive/i)
    console.log(checkbox)
    fireEvent.click(checkbox, { target: { archive: 'archive'  }})

    // then
    expect(spy).toHaveBeenCalledWith(![archive]);
  });
});

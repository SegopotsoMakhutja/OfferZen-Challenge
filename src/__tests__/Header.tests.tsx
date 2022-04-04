import React from 'react';
import { render } from '../test-utils';
import { screen } from '@testing-library/react';
import { Header } from '../components';

describe('Header component', () => {
  it('should render the header', () => {
    render(<Header />);
    const headerLogo = screen.getByRole('img', {  name: /offerzen\-logo/i})
    expect(headerLogo).toBeInTheDocument();
  });
})
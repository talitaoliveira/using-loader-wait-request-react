import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Page', () => {
  it('should exist a button with name "call API"', () => {
    render(<Loader />)
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

}) 
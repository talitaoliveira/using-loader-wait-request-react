import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Page', () => {
  it('button', () => {
    render(<App />)
    expect(screen.getByRole('button', {name: /call API/i})).toBeInTheDocument()

  })

})
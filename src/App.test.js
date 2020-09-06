import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Page', () => {
  it('should exist a button with name "call API"', () => {
    render(<App />)
    expect(screen.getByRole('button', {name: /call API/i})).toBeInTheDocument()
  })

  it('should exist an input to put the github user', () => {
    render(<App />)
    expect(screen.getByRole('textbox', {name: /github user/i})).toBeInTheDocument()
  })
})
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('Page', () => {
  it('should exist a button with name "call API"', () => {
    render(<App />)
    expect(screen.getByRole('button', {name: /call API/i})).toBeInTheDocument()
  })

  it('should exist an input to put the github user', () => {
    render(<App />)
    expect(screen.getByRole('textbox', {name: /Digite seu usuário do Github/i})).toBeInTheDocument()
  })

  it('should not appear the loader without click the button"', async () => {
    render(<App />)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('should appear the loader when click the button"', async () => {
    render(<App />)
    userEvent.click(screen.getByRole('button', {name: /call API/i}))
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })
  
})
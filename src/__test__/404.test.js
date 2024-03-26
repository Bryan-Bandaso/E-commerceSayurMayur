import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import NotFoundPage from '../pages/404'

describe('NotFoundPage component', () => {
  test('renders image', () => {
    render(<NotFoundPage />)
    const imageElement = screen.getByAltText('notFound')
    expect(imageElement).toBeInTheDocument()
  })

  test('renders "Back" button', () => {
    render(<NotFoundPage />)
    const buttonElement = screen.getByRole('button', { name: /Back/i })
    expect(buttonElement).toBeInTheDocument()
  })

  test('clicking "Back" button triggers action', () => {
    const mockAction = jest.fn()
    render(<NotFoundPage onClick={mockAction} />)
    const buttonElement = screen.getByRole('button', { name: /Back/i })
    fireEvent.click(buttonElement)
    expect(mockAction).toHaveBeenCalled()
  })
})

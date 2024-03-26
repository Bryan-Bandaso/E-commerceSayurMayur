import React from 'react'
import { render } from '@testing-library/react'
import CartPage from '../pages/user/cart.jsx'

describe('CartPage component', () => {
  test('renders Navbar', () => {
    const { getByText } = render(<CartPage />)
    const navbarElement = getByText(/Navbar/i)
    expect(navbarElement).toBeInTheDocument()
  })

  test('renders TableCustom', () => {
    const { getByText } = render(<CartPage />)
    const tableElement = getByText(/TableCustom/i)
    expect(tableElement).toBeInTheDocument()
  })

  test('renders SummaryCart', () => {
    const { getByText } = render(<CartPage />)
    const summaryElement = getByText(/SummaryCart/i)
    expect(summaryElement).toBeInTheDocument()
  })

  test('renders Footer', () => {
    const { getByText } = render(<CartPage />)
    const footerElement = getByText(/Footer/i)
    expect(footerElement).toBeInTheDocument()
  })
})

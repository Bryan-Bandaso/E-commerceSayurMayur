import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import DetailProductPage from '../pages/user/detailProduct.jsx'

describe('DetailProductPage component', () => {
  test('renders Navbar', () => {
    const { getByText } = render(<DetailProductPage />)
    const navbarElement = getByText(/Navbar/i)
    expect(navbarElement).toBeInTheDocument()
  })

  test('renders product details correctly', () => {
    const { getByText, getByRole } = render(<DetailProductPage />)
    const productName = getByText(/Fujifilm X-T30/i)
    const productPrice = getByText('$100')
    const quantityInput = getByRole('textbox', { name: /Quantity/i })

    expect(productName).toBeInTheDocument()
    expect(productPrice).toBeInTheDocument()
    expect(quantityInput).toHaveValue(1)
  })

  test('increments quantity when increment button is clicked', () => {
    const { getByRole } = render(<DetailProductPage />)
    const incrementButton = getByRole('button', { name: /\+/i })
    const quantityInput = getByRole('textbox', { name: /Quantity/i })

    fireEvent.click(incrementButton)
    expect(quantityInput).toHaveValue(2)
  })

  test('decrements quantity when decrement button is clicked', () => {
    const { getByRole } = render(<DetailProductPage />)
    const decrementButton = getByRole('button', { name: /-/i })
    const quantityInput = getByRole('textbox', { name: /Quantity/i })

    fireEvent.click(decrementButton)
    expect(quantityInput).toHaveValue(1)
  })
})

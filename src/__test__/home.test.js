import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePage from '../pages/user/home.jsx'

describe('HomePage component', () => {
  test('renders Navbar', () => {
    render(<HomePage />)
    const navbarElement = screen.getByText(/Navbar/i)
    expect(navbarElement).toBeInTheDocument()
  })

  test('renders Carousel', () => {
    render(<HomePage />)
    const carouselElement = screen.getByTestId('carousel')
    expect(carouselElement).toBeInTheDocument()
  })

  test('renders "Why Choose Us" section', () => {
    render(<HomePage />)
    const whyChooseUsSection = screen.getByText(/Why Choose Us!/i)
    expect(whyChooseUsSection).toBeInTheDocument()
  })
})

const request = require('supertest')
const express = require('express')

const adminProductRouter = require('../router/admin/adminProduct')
const productAdminServices = require('../services/admin/adminProduct')

jest.mock('../../services/admin/adminProduct', () => ({
  getViewDashboard: jest.fn(),
  getViewProduct: jest.fn(),
  getUpdateProductID: jest.fn(),
  deleteProduct: jest.fn(),
  createProduct: jest.fn(),
  updateProduct: jest.fn(),
}))

const app = express()
app.use('/admin', adminProductRouter)

describe('Admin product routes', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call getViewDashboard when GET request is made to /admin/dashboard', async () => {
    productAdminServices.getViewDashboard.mockReturnValueOnce(
      'Some HTML content',
    )

    const response = await request(app).get('/admin/dashboard')

    expect(response.status).toBe(200)

    expect(response.text).toBe('Some HTML content')

    expect(productAdminServices.getViewDashboard).toHaveBeenCalledTimes(1)
  })

  // Test other routes similarly
  // ...

  // Example:
  it('should call createProduct when POST request is made to /admin/newProduct', async () => {
    // Mock the implementation of createProduct
    productAdminServices.createProduct.mockResolvedValueOnce({ success: true })

    // Make a POST request to the route
    const response = await request(app)
      .post('/admin/newProduct')
      .attach('images', 'path/to/image.jpg')

    // Expect the status code to be 200
    expect(response.status).toBe(200)

    // Expect the response body to contain the success message
    expect(response.body).toEqual({ success: true })

    // Ensure createProduct is called once
    expect(productAdminServices.createProduct).toHaveBeenCalledTimes(1)
  })
})

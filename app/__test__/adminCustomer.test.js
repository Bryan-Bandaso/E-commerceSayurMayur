const request = require('supertest')
const express = require('express')

const app = require('../../app')
const db = require('../../config/database')

const adminCustomersRouter = require('../router/admin/adminCustomers.js')
const productAdminServices = require('../services/admin/adminCustomers.js')

jest.mock('../../services/admin/adminCustomers', () => ({
  getViewCustomers: jest.fn(),
}))

const app = express()
app.use('/admin', adminCustomersRouter)

describe('Admin customers route', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call getViewCustomers and return data', async () => {
    productAdminServices.getViewCustomers.mockResolvedValueOnce([
      'customer1',
      'customer2',
    ])

    const response = await request(app).get('/admin/customers')

    expect(response.status).toBe(200)

    expect(response.body).toEqual(['customer1', 'customer2'])

    expect(productAdminServices.getViewCustomers).toHaveBeenCalledTimes(1)
  })
})

describe('getViewCustomers', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should respond with customers data when database query is successful', async () => {
    const mockCustomers = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ]
    db.select.mockResolvedValue(mockCustomers)

    const response = await request(app).get('/admin/customers')

    expect(response.status).toBe(200)
    expect(response.body.customers).toEqual(mockCustomers)
  })

  it('should respond with 500 error when database query fails', async () => {
    const mockError = new Error('Database error')
    db.select.mockRejectedValue(mockError)

    const response = await request(app).get('/admin/customers')

    expect(response.status).toBe(500)
    expect(response.body).toEqual({
      message: 'Error fetching product data',
      error: mockError.message,
    })
  })
})

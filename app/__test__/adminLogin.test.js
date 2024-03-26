const request = require('supertest')
const express = require('express')

const loginRouter = require('../router/admin/adminLogin.js')
const productAdminServices = require('../services/admin/adminLogin.js')

jest.mock('../services/admin/adminLogin.js', () => ({
  getViewLogin: jest.fn(),
  loginAdmin: jest.fn(),
}))

const app = express()
app.use('/', loginRouter)

describe('Admin login route', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call getViewLogin when GET request is made to /admin/login', async () => {
    productAdminServices.getViewLogin.mockReturnValueOnce('Some HTML content')

    const response = await request(app).get('/admin/login')

    expect(response.status).toBe(200)

    expect(response.text).toBe('Some HTML content')

    expect(productAdminServices.getViewLogin).toHaveBeenCalledTimes(1)
  })

  it('should call loginAdmin when POST request is made to /admin/login', async () => {
    productAdminServices.loginAdmin.mockResolvedValueOnce({ success: true })

    const response = await request(app)
      .post('/admin/login')
      .send({ username: 'admin', password: 'password' })

    expect(response.status).toBe(200)

    expect(response.body).toEqual({ success: true })

    expect(productAdminServices.loginAdmin).toHaveBeenCalledTimes(1)
  })
})

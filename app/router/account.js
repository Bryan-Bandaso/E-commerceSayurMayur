const express = require('express')
const app = express.Router()

const userServices = require('../services/account')

app.get('/user/login', userServices.getViewLogin)
app.get('/user/register', userServices.getViewRegist)

app.post('/user/login2', userServices.loginUser)
app.post('/user/register2', userServices.createDataUser)

module.exports = app

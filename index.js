const express = require('express')
const app = express()
const router = require('./app/router')
const path = require('path')
const methodOverride = require('method-override')
const swaggerJSON = require('./swagger.json')
const swaggerUI = require('swagger-ui-express')

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'app', 'views'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(router)

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))

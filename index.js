require('dotenv').config()
const app = require('express')()
const bodyParser = require('body-parser')
const routes = require('./src/routes/garage.js')

// create application/json parser
var jsonParser = bodyParser.json()

app.use('/api', jsonParser, routes)

app.listen(9009, () => {
	console.log('Listening Garage on 9009')
})

require('dotenv').config()
const app = require('express')()
const routes = require('./src/routes/garage.js')
app.use('/', routes)
app.listen(9009, () => {

	console.log('Listening Garage on 9009')

})

const routes = require('express').Router()
const myq = require('../lib/myq')

routes.get('/open', async  (req, res) => {
	const result = await myq.login()
        const devices = await myq.getDevices([17])
	console.log(devices)
	const door = devices.devices[0]

	const response = await myq.setDoorState(door.id, 1)
	
	console.log(response)
	res.send('opened?')
})

routes.get('/close', async  (req, res) => {
	const result = await myq.login()
        const devices = await myq.getDevices([17])
	const door = devices.devices[0]
	console.log('door: ', door)
	const response = await myq.setDoorState(door.id, 0)
	
	console.log(response)
	res.send('closed?')
})


module.exports = routes

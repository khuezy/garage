const routes = require('express').Router()
const myq = require('../lib/myq')

routes.get('/open', async  (req, res) => {
	const result = await myq.login()
        const devices = await myq.getDevices([17])
	const door = devices.devices[0]
	if (!door) {
		res.statusCode(500)
		res.send({success: false, message: 'Garage not found'})
	}
	if (door.doorState !== 1) {
		const response = await myq.setDoorState(door.id, 1)
		console.log(response)
	}
	res.send('opened?')
})

routes.get('/close', async  (req, res) => {
	const result = await myq.login()
        const devices = await myq.getDevices([17])
	const door = devices.devices[0]

	if (door.doorState !== 2) {
		const response = await myq.setDoorState(door.id, 0)
		console.log(response)
	}
	res.send('closed?')
})


module.exports = routes

const routes = require('express').Router()
const myq = require('../lib/myq')

const garage = require('../lib/garage')

routes.put('/garage', (req, res) => {

  const {state} = req.body

  switch (state) {
    case 'open':
      garage.open(res)
      break
    case 'close':
      garage.close(res)
      break
    default:
      res.status(400)
      res.send({success: false, message: 'Bad request'})
  }

  /*

	const result = await myq.login()
  const devices = await myq.getDevices([17])
  const door = devices.devices[0]
  console.log('door: ', door)

	if (!door) {
		res.statusCode(500)
    res.send({success: false, message: 'Garage not found'})
    return
  }
  if (door.online) {
    if (door.doorState !== 1) {
      //const response = await myq.setDoorState(door.id, 1)
      //console.log(response)
    }
    res.send('opened?')
  } else {
    setTimeout(() => {
      openHandler(req, res)
    }, 5000)
  }

  */
  
})


module.exports = routes

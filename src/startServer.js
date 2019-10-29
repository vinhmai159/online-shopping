import http from 'http'

const port = process.env.PORT || 3000

export default (app, eventEmitter) => {
  validatePort()
  http.createServer(app).listen(port)
  eventEmitter.emit('boot.ready')
}

function validatePort() {
  if (!port) {
    console.log('*** PLEASE SET PORT in .env file ***')
    throw new Error('*** PLEASE SET PORT in .env file ***')
  }
}

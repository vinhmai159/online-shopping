import express from 'express'
import events from 'events'
import morgan from  'morgan'

import startServer from './startServer'
import init from './init'
import route from './routes'

const eventEmitter = new events.EventEmitter()
const app = express()

app.use(morgan('combined'))
app.use(express.static('public'));

eventEmitter.once('boot.ready', () => {
  console.log('SERVER BOOT READY')
  init(app)
  app.use(route())
})

startServer(app, eventEmitter)

export default  {
  app
}

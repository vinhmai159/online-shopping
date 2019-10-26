import { mongoose } from '../utils/mongoose'
import config from '../configs'

export default async () => {
  mongoose.set('debug', true)
  try {
    const options = {
      autoIndex: true
    }
    await mongoose.connect(config.db, config.dbOptions(options))
  } catch (error) {
    console.log('Error on connecting to db: ', error)
    console.log('*** PLEASE CONNECT TO DATABASE BEFORE RUN SERVER')
    process.exit(1)
  }
}

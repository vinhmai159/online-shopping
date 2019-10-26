import connectDb from './db'

export default async () => {
  await connectDb()
  require('../models')
}

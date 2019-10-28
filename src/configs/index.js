export default {
  db: process.env.DB,
  dbOptions: (options) => {
    return {
      useCreateIndex: true,
      autoIndex: options.autoIndex,
      autoReconnect: true,
      useNewUrlParser: true,
      keepAlive: 1,
      connectTimeoutMS: 300000,
      socketTimeoutMS: 300000,
      useUnifiedTopology: true
    }
  },
  secretKey: 'ttcn',
  limit: 10
}

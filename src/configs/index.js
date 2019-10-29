export default {
  db: process.env.DB || 'mongodb://ttcn:ttcn123@ds339348.mlab.com:39348/shopping-online',
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
  publicKey: 'online-shopping'
}

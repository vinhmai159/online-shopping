import { mongoose, Schema } from '../../utils/mongoose'
import statics from './static'
import methods from './method'

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    index: true
  },
  password: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date
}, {
  versionKey: false
})

UserSchema.statics = statics

UserSchema.methods = methods

/**
 * Presave hook
 */
UserSchema.pre('save', function (next) {
  // Set search string
  this.updatedAt = new Date()

  next()
})

// Export
export default mongoose.model('User', UserSchema)

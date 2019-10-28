import { mongoose, Schema } from '../../utils/mongoose'
import statics from './static'
import methods from './method'

const CategorySchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date
}, {
  versionKey: false
})

CategorySchema.statics = statics

CategorySchema.methods = methods

/**
 * Presave hook
 */
CategorySchema.pre('save', function (next) {
  this.updatedAt = new Date()
  next()
})


// Export
export default mongoose.model('Category', CategorySchema)

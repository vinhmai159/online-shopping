import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    name: String,
    image_path: String,
    time_stamp: {
        type: Date,
        default: Date.now,
    }
})

export default mongoose.model('Image', ImageSchema);


import { mongoose,Schema } from '../../utils/mongoose';
import { number } from 'joi';

const ProductSchema = new Schema({
    name: String,
    image: {
        type: String,
    },
    amount: {
        type: Number,
        default: 0,
    },
    size: String,
    color: String,
    price: {
        type: Number,
        trim: true,
    },
    discount: {
        type: Number,
        default: 0,
    },
    hot: {
        type: Number,
        default: 0,
    },
    category: {

    },
    timestamp: {
        type: Date,
        default: Date.now,
    }


})

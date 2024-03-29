import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.pluralize(null);

const collection = 'products';

const schema = mongoose.Schema({
    title: {type: String, required: true, index: true},
    description: {type: String, required: false},
    code: {type: String, required: true},
    price: {type: Number, required: true},
    status: {type: String, required: true},
    stock: {type: Number, required: true},
    category: {type: String, required: true, index: true},
    thumbnails: {type: String, required: false}
})

schema.plugin(mongoosePaginate)


export default mongoose.model(collection, schema)
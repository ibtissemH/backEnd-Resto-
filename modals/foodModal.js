
import mongoose from 'mongoose';

const foodschema = mongoose.Schema({

    name: String,

    category:String,

    price: Number,

    images:[String],
    
    user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'}

})


const food = mongoose.model('food', foodschema)

export default food
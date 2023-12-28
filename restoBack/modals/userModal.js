
import mongoose from 'mongoose';



const userschema = mongoose.Schema({

    name: String,

    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    confirmPaswword:String,
})

const user = mongoose.model('User', userschema)

export default user

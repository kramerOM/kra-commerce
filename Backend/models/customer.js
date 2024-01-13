const mongoose = require(`mongoose`);
const bcrypt = require(`bcrypt`);


const customerSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,

    },
    confirmPassword: {
        type: String,
    },
    phoneNumber: {
        type: Number,
        required:true,
    }

})
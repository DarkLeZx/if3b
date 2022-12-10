// (1) Buat Schema User
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    // Schema data
    nama: {
        type: String,
        required: true,
        max: 40
    },
    email: {
        type: String,
        required: true,
        max: 48
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
    },
    role: {
        type: String,
        default: 0 // 0 = user, 1 = admin 
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/siswo-s-p/image/upload/v1647818382/samples/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714_nckruz.jpg",
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)
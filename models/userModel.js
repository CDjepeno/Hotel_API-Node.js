import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
})

// Before - Register
UserSchema.pre('save', async function (next) {
    const user = this

    const hash = await bcrypt.hash(user.password, 10)

    user.password = hash

    next()
})


// Add function to check password
UserSchema.methods.isValidPassword = async function (password) {
    const user = this

    const isSame = await bcrypt.compare(password, user.password)

    return isSame // Return true or false
}



const UserModel = mongoose.model('User', UserSchema)

export default UserModel
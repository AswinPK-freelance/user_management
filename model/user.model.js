import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        trim: true,
        unique: [true, "Email must be unique"],
        required: [true, 'Person Name is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is Required']
    },
    profileImage: {
        type: String,
        trim: true,
        required: [true, "Profile image is required"]
    }
}, {
    timestamps: true
});

export default mongoose.model('User', userSchema);

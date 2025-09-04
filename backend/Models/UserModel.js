const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileImg: {
        type: String,
        required: true,
    },
    resume: {
        type: String,
        required: true,
    },
    skills: {
        type: [String],
        required: true,
    }
}, { timestamps: true });

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
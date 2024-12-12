import mongoose, { Schema } from "mongoose";

const userScema = new Schema({
    // username:String,
    // email:String,
    // password:String

    // given below best practices

    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Enter A Password"]
    }

    //timestamps give a two property createdAt,updatedAt
}, { timestamps: true });

export const User = mongoose.model("User", userScema);
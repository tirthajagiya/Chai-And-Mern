import { type } from "express/lib/response";
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        //refrence of other Schema
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    //Array Of Sub Todo's

    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ]
}, { timestamps: true });

export const Todo = mongoose.model("Todo", todoSchema);
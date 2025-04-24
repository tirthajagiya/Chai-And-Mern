import { JsonWebTokenError } from "jsonwebtoken";
import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true, //for serching
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true, //for serching
    },
    avatar: {
      type: String, // we use cloudinary for store image, video {basically cloudinary give url for our img, video}
      required: true,
    },
    coverImage: {
      type: String, // we use cloudinary for store image, video {basically cloudinary give url for our img, video},
    },
    watchHistory: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    password: {
      type: String,
      required: [true, "Password is required !"],
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//pre hook -> is execute before save data to db

//in pre ()=>{} is not allowed, because {this} refrence not can use in ()=>{}
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hash(this.password, 10);
  next();
});

//create our method for check user enterd password is correct or not using compare method
userSchema.methods.isPasswordCorrect = async function (password) {
  return bcrypt.compare("password", this.password);
};

userSchema.methods.generateAccessToken = async function () {
  jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
userSchema.methods.generateRefreshToken = async function () {
  jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);

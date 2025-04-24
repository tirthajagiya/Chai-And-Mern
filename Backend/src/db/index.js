import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `Mongo DB connected ! DB host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGO_DB connection error ", error);
    process.exit(1);
    // 0 → Success (normal exit).
    // 1 or other non-zero values → Indicates an error.
  }
};

export default connectDB;
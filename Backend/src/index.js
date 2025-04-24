// require('dotenv').config({path:'./.env'})

import { app } from "./app.js";
import connectDB from "./db/index.js";
import "dotenv/config";

connectDB()
  .then(() => {
    
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });

    const port = process.env.PORT || 8000
    
    app.listen(( port ), () => {
      console.log(`Server is running at Port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB Connetion Failed !!!", err);
  });

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// import {express} from 'express';
// const app=express();

// //iify function
// ;( async ()=>{
//     try {

//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log("Error",error);
//             throw error;
//         })

//         app.listen(process.env.PORT ,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.error("Error : ",error);
//         throw error;
//     }
// } )()

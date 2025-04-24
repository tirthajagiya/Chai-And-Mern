import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

//app.use is use for middleware and configration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true, //cookie
  })
);

// request json data
app.use(express.json({ limit: "16kb" }));

// request from url
app.use(
  express.urlencoded({
    extended: true, //Allows parsing nested objects in form data.
    limit: "16kb",
  })
);

app.use(express.static("public")); //static files (images, CSS, JavaScript, Favicon)

app.use(cookieParser()); //accsess to user browser cookie



//routes import

import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users/", userRouter)
// it is a standard practice /api/v1/users/  
//v means version

//http://localhost:8000/users/login

export { app };
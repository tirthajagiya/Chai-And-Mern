//you can write script in package.json like->"start": "node file_name"
//nowever start for server write in cmd ->npm run start

const express = require('express')

const app=express()

//The data which is not to be shown to the user this data set in env file
//step of env file
//1)download dotenv module using npm(npm i dotenv)
//2)after require this file using require('dotenv').config()
//3)when use this envfile variable then write process.env.variable_name

require('dotenv').config()

app.get('/',(req,res)=>{
    res.send("<marquee>Hello</marquee>")
})

app.listen(process.env.PORT,()=>{
    console.log(`Server Is Run In Port ${process.env.PORT}`)
})
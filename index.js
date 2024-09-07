require('dotenv').config()
// console.log(process.env)
const express = require('express')
//above line can also be written as 
//import express from "express"
const app = express() //app is a variable like math
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('Hello Twitter')
})
app.get('/login',(req,res)=>
{
    res.send('You are logged in')
})
app.get('/youtube',(req,res)=>
{
    res.send('<h1>Hello Youtube</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
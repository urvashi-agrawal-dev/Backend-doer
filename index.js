const express = require('express')
//import express from "express"
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('uravivacom')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please do this</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>do this seriously</h2>")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
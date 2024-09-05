require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('This is twitter')
})

app.get('/login', (req, res)=>{
    res.send('<h1>This is login</h1>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})
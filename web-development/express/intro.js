const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
  res.send('COntact US')
})

app.get('/home', (req, res) => {
  res.send('<h1>HOME PAGE</h1>')
})

app.get('/review', (req, res) => {
  res.send('Reviews')
})

app.get('/Hii', (req, res) => {
  res.send('Hii There')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
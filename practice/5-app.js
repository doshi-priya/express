const express = require('express')
const path = require('path')
const app = express()

const logger = require('./logger')
const authorize = require('./authorize')

app.use(authorize)

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})


app.all('*', (req, res) => {
    res.status(404).send('resource not found')
  })

app.listen(5001, () =>{
    console.log('server is listening on port 5001')
})
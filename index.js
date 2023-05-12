require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//home
app.get('/books', (req, res) => {
    res.render('home')
  })
  
// index
app.get('/', (req, res) => {
  let index = []
  res.render('books/index', {books})
})

//404 error
  app.get('*', (req, res) => {
    res.render('error404')
  })
  

app.listen(process.env.PORT)


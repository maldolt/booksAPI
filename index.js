require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const cors = require('cors')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => { console.log('connected to mongo: ', process.env.MONGO_URI) })

app.use('/books', require('./controllers/books_controllers'))
//home
app.get('/', (req, res) => {
    res.send('Welcome')
  })
  

//404 error
  app.get('*', (req, res) => {
    res.render('error404')
  })
  

  
app.listen(process.env.PORT)


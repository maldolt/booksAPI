const express = require("express");
const books = express.Router();
const Book = require("../models/books.js");

books.get('/seed', (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})


// Index:
books.get('/', async (req, res) => {
    Book.find()
    .then((foundBooks) => {
        res.status(200).send(foundBooks)
    })
    .catch(err => {
        res.status(400).send('Error:',err)
    })
})


books.get('/:id', (req, res) => {
    console.log('got here 1')
    Book.findById(req.params.id)
    .then(book => {
      console.log('got here 2')
      console.log(book.title)
      res.status(200).send(book)
    })
    .catch(err => {
      console.log('got here 3')
      console.log('error',err)
      res.status(400).send('Error:',err)
    })
})


//seed
books.get('/data/seed', (req, res) => {
    Book.insertMany(seedData)
      .then( () => {
        res.status(303).redirect('/books')
      })
      .catch( err => {
        res.status(400).send('Error:',err)
      })
})


books.post('/', (req, res) => {
    Book.create(req.body)
    .then( () => {
        res.status(200).send(`POST route to create a book, book added is the following: ${req.body}` )
    })
    .catch(err => {
        res.status(400).send('Error:',err)
    })
})


books.put('/:id', (req, res) => {
    
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => {
      console.log('got here 2')
      console.log(book.title)
      res.status(200).send(`Book modified: ${book}`)
    })
    .catch(err => {
      console.log('error',err)
      res.status(400).send('Error:',err)
    })
})


books.delete('/:id', (req, res) => {
    
    Book.findByIdAndDelete(req.params.id)
    .then(book => {
      res.status(200).send('DELETE Successful')
    })
    .catch(err => {
      console.log('error',err)
      res.status(400).send('Error:',err)
    })
})


module.exports = books;

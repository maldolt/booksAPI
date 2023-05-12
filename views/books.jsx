const React = require('react')
const Def = require('./default')

function books (data) {
  let booksFormatted = data.books.map((book) => {
      return (
          <div className="col-sm-6">
              <h2><a href={`/books/${book.id}`} >
                  {book.title}
                  </a>
              </h2>
              <p className='text-center'>
                  {book.description}
              </p>
              <img src={book.imageURL} alt={book.title}></img>
              
              <p className='text-center'>
                  Published in {book.year}
              </p>
              <p className='text-center'>
                  Quantity available: {book.quantity}
              </p>
          </div>
      )
  })
  return (
      <Def>
          <main>
              <h1>Books at our Store:</h1>
              <div className='row'>
                  {booksFormatted}
              </div> 
          </main>
      </Def>
  )
}

module.exports = books
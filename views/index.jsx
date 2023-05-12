const React = require('react')
const Def = require('./default')

function index (data) {
    let booksFormatted = data.books.map((book) => {
      return (
        <div>
          <h2>{book.name}</h2>
          <img src={book.pic} alt={book.name}/>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Books INDEX PAGE</h1>
              {booksFormatted}
          </main>
      </Def>
  )
  }
  
  
module.exports = index

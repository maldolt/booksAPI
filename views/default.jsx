const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'></link>
            </head>
            <body>
            <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/books">Books</a>
                        </li>
                        <li>
                            <a href="/books/new">Add Book</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
  }
  

module.exports = Def

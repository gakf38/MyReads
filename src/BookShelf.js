import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from './Shelf'

function BookShelf(props) {

  const shelves = [
    "Currently Reading",
    "Want to Read",
    "Read"
  ]

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>{props.title}</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf) => (
            <Shelf key={shelf} title={shelf} books={props.books} updateBook={props.updateBook} />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  title: PropTypes.string,
  books: PropTypes.array,
  updateBook: PropTypes.func
}

export default BookShelf
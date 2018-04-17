import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from './Shelf'

function BookShelf(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>{props.title}</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf title={"Currently Reading"} books={props.books} updateBook={props.updateBook} />
          <Shelf title={"Want to Read"} books={props.books} updateBook={props.updateBook} />
          <Shelf title={"Read"} books={props.books} updateBook={props.updateBook} />
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
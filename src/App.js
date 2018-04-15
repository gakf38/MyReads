import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import BookSearch from './BookSearch'
import BookShelf from './BookShelf'
import './App.css'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  // Get all books via the BooksAPI after App Component has been initially rendered
  componentDidMount() {
    this.getBooks()
  }

  // Execute the BooksAPI Get All function
  getBooks = () => {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
          books
      }))
    })
  }

  // Execute the BooksAPI Update function
  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((response) => {
      this.getBooks()
    })
  }

  render() {

    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <BookShelf title={"MyReads"} books={this.state.books} openSearch={this.openSearch} updateBook={this.updateBook} />
        )}/>

        <Route path="/search" render={() => (
          <BookSearch books={this.state.books} updateBook={this.updateBook} />
        )}/>

      </div>
    )
  }
}

export default BooksApp

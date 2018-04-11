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
      BooksAPI.getAll()
      .then((books) => {
          this.setState(() => ({
              books
          }))
      })
  }

  render() {

    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <BookShelf title={"MyReads"} books={this.state.books} openSearch={this.openSearch} />
        )}/>

        <Route path="/search" render={() => (
          <BookSearch />
        )}/>

      </div>
    )
  }
}

export default BooksApp

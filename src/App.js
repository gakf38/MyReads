import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookSearch from './BookSearch'
import BookShelf from './BookShelf'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
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

  openSearch = () => {
    this.setState({ showSearchPage: true })
  }

  closeSearch = () => {
    this.setState({ showSearchPage: false })
  }

  render() {

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <BookSearch closeSearch={this.closeSearch} />
        ) : (
          <BookShelf title={"MyReads"} books={this.state.books} openSearch={this.openSearch} />
        )}
      </div>
    )
  }
}

export default BooksApp

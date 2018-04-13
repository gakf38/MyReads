import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class BookShelf extends Component {

	render() {

		return (

			<div className="list-books">
        <div className="list-books-title">
          <h1>{this.props.title}</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf title={"Currently Reading"} books={this.props.books} updateBook={this.props.updateBook} />
            <Shelf title={"Want to Read"} books={this.props.books} updateBook={this.props.updateBook} />
            <Shelf title={"Read"} books={this.props.books} updateBook={this.props.updateBook} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>

		);
	}
}

export default BookShelf
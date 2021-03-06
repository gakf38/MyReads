import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Shelf extends Component {

	static propTypes = {
		title: PropTypes.string,
		books: PropTypes.array,
		updateBook: PropTypes.func
	}

	render() {

		// Define mapping based on the Title of the Shelf and the shelf value on a book object
		const titleMapping = {
			"Currently Reading": "currentlyReading",
			"Want to Read": "wantToRead",
			"Read": "read"
		}

		// Fitler the books prop to only include books that match the Shelf title
		const shelfBooks = this.props.books.filter((book) => (
			book.shelf === titleMapping[this.props.title]
		))

		return (

			<div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                	{
                		// Create a Book for each object in the shelfBooks array
                		shelfBooks.map((book) => (
	            			<li key={book.id}>
	            				<Book book={book} updateBook={this.props.updateBook} />
	            			</li>
                		))
                	}

                </ol>
              </div>
            </div>

		);
	}
}

export default Shelf
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class BookSearch extends Component {

	static PropTypes = {
		books: PropTypes.array,
		updateBook: PropTypes.func
	}

	state = {
		query: '',
		books: []
	}

	setBooks = (searchResults) => {

		this.props.books.forEach((book) => {

			let match = searchResults.find((result) => result.id === book.id)

			if (match)
			{
				match.shelf = book.shelf
			}

		})

		this.setState(() => ({
			books: searchResults
		}))
	}

	searchBooks = (query) => {
		BooksAPI.search(query)
		.then((books) => {
			if (books.error === 'empty query')
			{
				this.setBooks([])
			}
			else
			{
				this.setBooks(books)
			}
		})
	}

	updateQuery = (query) => {
		this.setState(() => ({
			query
		}),
		() => {
			if (query)
			{
				this.searchBooks(query)
			}
			else
			{
				this.setBooks([])
			}
		})
	}

	render() {

		const { query } = this.state

		return (

			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">

						<input 
							type="text" 
							placeholder="Search by title or author" 
							value={query}
							onChange={(event) => this.updateQuery(event.target.value)}
						/>

					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{this.state.books.length > 0 && (
							this.state.books.map((book) => (
								<li key={book.id}><Book book={book} updateBook={this.props.updateBook} /></li>
							))
						)}
						{this.state.books.length < 1 && (
							<li>No Results</li>
						)}
					</ol>
				</div>
			</div>

		);
	}
}

export default BookSearch
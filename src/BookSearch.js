import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class BookSearch extends Component {

	state = {
		query: '',
		books: []
	}

	updateQuery = (query) => {
		this.setState(() => ({
			query
		}))
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

					</ol>
				</div>
			</div>

		);
	}
}

export default BookSearch
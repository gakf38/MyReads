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
		}),
		() => {
			if (query)
			{
				BooksAPI.search(query)
				.then((books) => {
					if(books.error === 'empty query')
					{
						this.setState(() => ({
							books: []
						}))

						console.log("Empty query")
					}
					else
					{
						this.setState(() => ({
							books
						}))

						console.log("Books", books)
					}
				})
			}
			else
			{
				this.setState(() => ({
					books: []
				}))
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
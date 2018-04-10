import React, { Component } from 'react'
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
                <Shelf title={"Currently Reading"} books={this.props.books} />
                <Shelf title={"Want to Read"} books={this.props.books} />
                <Shelf title={"Read"} books={this.props.books} />
              </div>
            </div>
            <div className="open-search">
              <a onClick={this.props.openSearch}>Add a book</a>
            </div>
          </div>

		);
	}
}

export default BookShelf
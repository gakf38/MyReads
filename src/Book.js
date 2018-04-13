import React, { Component } from 'react'

class Book extends Component {

  updateBook = (book, shelf) => {
      this.props.updateBook(book, shelf)
  }

	render() {

		return (

			<div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.image }}></div>
          <div className="book-shelf-changer">
            <select onChange={(event) => this.updateBook(this.props.id, event.target.value)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.author.join(", ")}</div>
      </div>

		);
	}
}

export default Book
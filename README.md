# MyReads Project

MyReads is the first project for the Udacity React Nanodegree. The app communicates with a Udacity provided backend to generate a collection of "shelves" that display books in different categories. Books can be moved from shelf to shelf depending on user preference. The app also features a book search functionality where users can look up new books to add to their existing shelves.  

To get started with MyReads:

* Clone this repository
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Components

This application utilizes a number of custom components. These components include:

* [`BookShelf`](#bookshelf)
* [`Shelf`](#shelf)
* [`Book`](#book)
* [`BookSearch`](#booksearch)

### `BookShelf`

This component is defined within [`BookShelf.js`](src/BookShelf.js). It is used to construct the collection of shelves that display any books currently assigned to a given shelf. A BookShelf will handle the creation of all necessary Shelf components. This component essentially represents the main page of the application and component takes a total of three props:

* title - String - used to define the title of application
* books - Array - a complete collection of all active books
* updateBook - Function - the function used to update the shelf of a given book

### `Shelf`

This component is defined within [`Shelf.js`](src/Shelf.js). It is used to construct an individual shelf within the BookShelf component. Each shelf will handle the creation of all necessary Book components. The component takes a total of three props:

* title - String - used to define the title of the given shelf
* books - Array - a complete collection of all active books (later filtered based on the title prop given)
* updateBook - Function - the function used to update the shelf of a given book

### `Book`

This component is defined within [`Book.js`](src/Book.js). It is used to construct any book that is displayed through the entire application. The component takes a total of two props:

* book - Object - the collection of data related to the given book (title, author(s), thumbnail, etc.)
* updateBook - Function - the function used to update the shelf of a given book

### `BookSearch`

This component is defined within [`BookSearch.js`](src/BookSearch.js). It is used to construct the entirity of the search functionality for the application. BookSearch is created via the main App component just like the BookShelf component mentioned above. BookSearch will create all necessary Book components based on the current search query. The component will take a total of two props:

* books - Array - a complete collection of all active books
* updateBook - Function - the function used to update the shelf of a given book

## Backend Server

To simplify the development process, Udacity provided a backend server to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods used to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a collection which represents the books currently in the bookshelves of the app
* This function is used in App.js

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* This function is used in App.js and Book.js

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a collection of a maximum of 20 book objects
* This function is used in BookSearch.js

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
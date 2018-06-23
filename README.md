# MyReads Project

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:  Currently Reading ,Want to Read ,Read.Each book has a select options that lets user to select the shelf for that book. When user select a different shelf, the book moves there.The default value for the select option is always be the current shelf the book is in.The main page also has a link to /search, a search page that allows user to find books to add in his/her library.  The search page has a text input that is used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a select options that lets user to add the book to the library.The search page also has a link to / (the root URL), which leads back to the main page.  When user navigate back to the main page from the search page, user would instantly see all of the selections that made on the search page in the his/her library.

## Requirments

The application was created with create-react-app and requires only npm

## TL;DR

To get it installed and launched:

* Download or Clone the Repository
* install all dependencies with `npm install`
* start the server with `npm start`
* After starting the server hit the URL:http://localhost:3000/

## Backend Server

A backend server & javascript API is provided.The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).



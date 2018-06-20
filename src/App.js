import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './BookSearch'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'

const bookshelfs = [
                      {title: 'Currently Reading',shelf:'currentlyReading' },
                      { title: 'Want to Read',shelf:'wantToRead' },
                      { title: 'Read',shelf:'read' }
                    ];
class BooksApp extends React.Component {

  state = {
    books:[],
  }

  componentDidMount(){
    this.getAllBooks();
  }
  getAllBooks=()=>{
        BooksAPI.getAll().then(books=>{
          this.setState(()=>({
            books
          }))
        })
  }
  updateBookShelf=(book,shelf)=>{
      BooksAPI.update(book,shelf).then(
        this.getAllBooks()
      )
  }
  render() {
    return (
      <div className="app">
        <Route path="/search" component={BookSearch} />
        <Route exact path="/" render={()=>(
          <ListBooks
            books={this.state.books}
            bookshelfs={bookshelfs}
            onChange={this.updateBookShelf}
          />
          )}
        />
      </div>
    )
  }
}
export default BooksApp

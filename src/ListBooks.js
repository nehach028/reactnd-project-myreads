import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import BookShelf from './BookShelf'

class ListBooks extends Component{
	static propTypes={
		bookshelfs:PropTypes.array.isRequired,
		books:PropTypes.array.isRequired,
		onChange:PropTypes.func.isRequired
	}
	render(){
		const {bookshelfs,books}= this.props
		return(
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
            	<div className="list-books-content">
					{
						bookshelfs.map(bookshelf=>(
	                		<BookShelf
	                		 title={bookshelf.title}
	                		 key={bookshelf.title}
	                		 books={books.filter(book=>(book.shelf===bookshelf.shelf))}
	                		 onUpdateShelf={this.props.onChange}
	                		/>
						))
					}
					<div className="open-search">
	             		<Link to= "/search" >Add a book</Link>
					</div>
            	</div>
            </div>
        )
	}
}
export default ListBooks;

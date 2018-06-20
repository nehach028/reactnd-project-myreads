import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book'
class BookShelf extends  Component{

	static propTypes={
		title:PropTypes.string.isRequired,
		books:PropTypes.array.isRequired,
		onUpdateShelf:PropTypes.func.isRequired
	}
	onUpdate=(book,shelf)=>{
		this.props.onUpdateShelf(book,shelf)
	}
	render(){
		const {title,books}= this.props
		return(
				<div className="bookshelf">
	              	<h2 className="bookshelf-title">{title}</h2>
					<div className="bookshelf-books">
	                    <ol className="books-grid">
						{
	                		books.map(book=>(
									<Book key={book.id} book={book} updateBook={(shelf)=>{this.onUpdate(book,shelf)}}/>
	                			)
							)
	                	}
	                    </ol>
					</div>
				</div>
		)
	}
}
export default BookShelf;
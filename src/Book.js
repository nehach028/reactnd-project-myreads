import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component{

	static propTypes={
		book:PropTypes.object.isRequired,
		updateBook:PropTypes.func.isRequired
	}
	updateShelf=(event)=>{
		if(event.target.value!=='none'){
			this.props.updateBook(event.target.value)
		}
	}
	render(){
		const {book}=this.props
		return(
				<li>
                    <div className="book">
                      	<div className="book-top">
                      		<div className="book-cover" style={{
                      			width: 128,
                      			height: 193,
                      			backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                      		</div>
	                        <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={this.updateShelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
	                    </div>
						<div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors.toString()}</div>
                    </div>
                </li>
		)

	}

}
export default Book;
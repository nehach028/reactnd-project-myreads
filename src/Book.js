import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component{

	state={
		shelf:this.props.book.shelf
	}
	static propTypes={
		book:PropTypes.object.isRequired,
		updateBook:PropTypes.func.isRequired
	}
	updateShelf=(event)=>{
		this.props.updateBook(event.target.value)
		this.setState({shelf:event.target.value})
	}
	render(){
		const {book}=this.props
		const imageLinks=book.imageLinks ? book.imageLinks.thumbnail : 'none'
		const authors=book.authors ? String(book.authors) : <span>Authore Name not availabel</span>
		return(
				<li>
                    <div className="book">
                      	<div className="book-top">
                      		<div className="book-cover" style={{
                      			width: 128,
                      			height: 193,
                      			backgroundImage: `url(${imageLinks})` }}>
                      		</div>
	                        <div className="book-shelf-changer">
                              <select value={this.state.shelf} onChange={this.updateShelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
	                    </div>
						<div className="book-title">{book.title}</div>
                        <div className="book-authors">{authors}</div>
                    </div>
                </li>
		)
	}
}
export default Book;
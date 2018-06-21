import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

class BookSearch extends Component{

	static propTypes={
		books:PropTypes.array.isRequired,
		onChange:PropTypes.func.isRequired
	}
	state={
		query:'',

	}
	onSearchInput=(event)=>{
		this.setState({
			query:event.target.value,
		})

	}
	searchBoooksByQuery=(query)=>{
		this.props.onChange(query)
	}
	render(){

		const{query}=this.state
		const{books,onChange}=this.props
		const searchedBooks=query===''
							?	''
							: this.searchBoooksByQuery(query)
		console.log("result:",searchedBooks)
		return(
			<div className="search-books">
            	<div className="search-books-bar">
		            <Link
		            	className="close-search"
		            	to="/">Close</Link>
					<div className="search-books-input-wrapper">
			            <input type="text" placeholder="Search by title or author" onChange={this.onSearchInput} value={query}/>
					</div>
            	</div>
	            <div className="search-books-results">
	            	<ol className="books-grid"></ol>
	            </div>
      		</div>
		)
	}
}
export default BookSearch;
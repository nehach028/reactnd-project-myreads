import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types';
import Book from './Book';

class BookSearch extends Component{

	static propTypes={
		books:PropTypes.array.isRequired,
		onChange:PropTypes.func.isRequired
	}
	state={
		query:'',
		searchBooks:[]

	}
	onSearchInput=(event)=>{
		this.setState({
			query:event.target.value,
		})
		if(this.state.query!==''){
			this.getSearchBookResult(this.state.query)
		}

	}
	getSearchBookResult=(query)=>{
		BooksAPI.search(query).then(results=>{
			if(results.length>0){
				let updatedbookresult=this.checkSerachBookResult(results)
				this.setState({
	      			searchBooks:updatedbookresult
	      		})
			}else{
				this.setState({
					query:'',
					searchBooks:[]
				})
      		}
        })
  	}

	// Function to assign shelf property if it is not exist for searchpage books
	checkSerachBookResult=(results)=>{
		const {books}=this.props;
		//Asigning shelf property
		for (let book of results){
			if(!book.shelf){
				book.shelf="none"
			}
			for(let mainpagebook of books){
				if(mainpagebook.id===book.id){
					book.shelf=mainpagebook.shelf
				}
			}
		}
		return results;
	}
	onUpdate=(book,shelf)=>{
		this.props.onChange(book,shelf)
	}
	render(){
		const{query,searchBooks}=this.state
		return(
			<div className="search-books">
            	<div className="search-books-bar">
		            <Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
			            <input type="text" placeholder="Search by title or author" onChange={this.onSearchInput} value={query}/>
					</div>
            	</div>
	            <div className="search-books-results">
	            	<ol className="books-grid">
	            		{
	                		(query.length > 0 && searchBooks.length>0)?
	                		searchBooks.map(book=>(
									<Book key={book.id} book={book} updateBook={(shelf)=>{this.onUpdate(book,shelf)}}/>
							)) : ''
						}
	            	</ol>
	            </div>
      		</div>
		)
	}
}
export default BookSearch;
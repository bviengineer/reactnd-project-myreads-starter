/*
	Credit:
	Maeva NAP walkthrough was instrumental during the development of this project: 
	https://www.youtube.com/watch?v=i6L2jLHV9j8&index=39&list=PLCDXYWEHWgppmc0TJlQJLu3EQJ2Lka7lg&t=3600s
*/

import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class Search extends Component {
    state = {
        query: "", 
        searchBooks: [] //will hold books returned from user search
    }

    updateQuery = (query) => {
        this.setState({
            query: query
        })
        this.updateBookSearch(query)
    }

   updateBookSearch = query => {
		if(query) {
			BooksAPI.search(query).then(searchBooks => {
				if(searchBooks.error) {
					this.setState({ searchBooks: [] });
				} else {
					this.setState({ searchBooks: searchBooks })
				}        
			})
		} else {
				this.setState({ searchBooks: [] })
		}
	}

	render(){ 
			return( 
					<div className="search-books">
							<div className="search-books-bar">
				
				{/* React router link implementation - returns to main page */}
				<Link 
					className="close-search"
					to="/">Close</Link>

				<div className="search-books-input-wrapper">
					<input type="text" 
						placeholder="Search by title or author" 
						value={this.state.query}
						onChange={(e) => this.updateQuery(e.target.value)} />
				</div>
						</div>
					<div className="search-books-results">
						<ol className="books-grid">
			{
				this.state.searchBooks.map((searchBook) => {
					let shelf = "none";
					
					this.props.books.map(book => (
						book.id === searchBook.id ? shelf = book.shelf : ""
					));
					
					return(
						<li key={searchBook.id}>
							<Book 
								book={searchBook}
								updateShelf={this.props.updateShelf} 
								activeShelf={shelf} />
						</li>
					); //closing brace for nested return
				}) //closing braces for map method
				}
						</ol>
					</div>
				</div>
			); //closing bracket for return
	} //close curly brace for render()
} //closing curly brace for Search Component

export default Search;
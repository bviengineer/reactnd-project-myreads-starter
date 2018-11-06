import React from 'react';
import { Book } from './Book.js';
import { SearchLibrary } from "./searchLibrary.js";
import * as API from '../BooksAPI';


//Rendering in App.js
export class Search extends React.Component {
	constructor(props){
		super(props);
		
		this.state = { 
			query: "", 
			searchBooks: [] //will hold books returned from user search
		}
	}

	updateQuery = (userQuery) => {
		this.setState({
				query: userQuery
		})
		this.updateBookSearch(userQuery)
	}

	updateBookSearch = (userQuery) => {
	if(userQuery) {
		API.search(userQuery).then(booksResult => {
			if(booksResult.error) {
				this.setState({ searchBooks: [] });
			} else {
				this.setState({ searchBooks: booksResult })
			}        
		})
	} else {
			this.setState({ searchBooks: [] })
		}
	}

	render(){ 
		return( 
			<div className="search-books">

				{/* Renders Search Bar */}
				<SearchLibrary query={this.state.query} updateQuery={this.updateQuery}/>

			<div className="search-books-results">
				<ol className="books-grid">
			
				{this.state.searchBooks.map((theBooks) => {
					let shelf = "none";
					
					/*
						1. Determines whether the book id of a book returned from a search matches the book id of a book already on a shelf 
						2. If there is a book id match, the shelf of the matched item will be set to the shelf for the identical book
						3. Otherwise, the shelf will be set to NONE. 
					*/
					this.props.books.map(book => (
						book.id === theBooks.id ? shelf = book.shelf : "none"
					));
					
					return(
						<li key={theBooks.id}>
							<Book 
								book={theBooks}
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

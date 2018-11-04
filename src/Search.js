/*
  CREDITS:
	  1. Maeva NAP walkthrough was instrumental during the development of this project: 
    https://www.youtube.com/watch?v=i6L2jLHV9j8&index=39&list=PLCDXYWEHWgppmc0TJlQJLu3EQJ2Lka7lg&t=3600s
    
    2. Learn ReactJS: Part1 on CodeCademy was beneficial in understanding how ReactJS works. 

  PURPOSE of Search.js:
    As the name suggests, Search.js manages the search for books and handles any error should any arise during the search process.
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from './Book.js';
import * as API from './BooksAPI';


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
				<div className="search-books-bar">
				
				{/* React router link implementation - returns to main page */}
				<Link 
					className="close-search"
					to="/">Close
				</Link>
					{/* Search Bar
					---Initial state and appearence will be empty
					---State and appeareance will populate based on user query, if any matches are found */}
				<div className="search-books-input-wrapper">
					<input type="text" 
						placeholder="Search by title or author" 
						value={this.state.query}
						onChange={(e) => this.updateQuery(e.target.value)} />
				</div>
			</div>

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
						book.id === theBooks.id ? shelf = book.shelf : ""
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

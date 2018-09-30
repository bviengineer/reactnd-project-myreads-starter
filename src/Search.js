import React, {Component } from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
// import escapeRegExp from 'escape-string-regexp';

class Search extends Component {
    state = {
        query: "", 
        searchBooks: [] //array for books returned from search
    }

    updateQuery = (query) => {
        this.setState({
            query: query
        })
        this.updateSearch(query)
    }

   updateSearch = query => {
		 if(query) {
			BooksAPI.search(query).then(searchBooks => {
				if(searchBooks.error) {
					this.setState({ searchBooks: [] });
				} else {
					this.setState({ searchBooks: searchBooks });
				}        
      })
		 } else {
			 this.setState({ searchBooks: []});
		 }
		};
		
    render(){ 
        return( 
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                    <div className="search-books-input-wrapper">
											<input type="text" 
												placeholder="Search by title or author" 
												value={this.state.query}
												onChange={(e) => this.updateQuery(e.target.value)}
											/>
                    </div>
                </div>
            <div className="search-books-results">
              <ol className="books-grid">
								{
									this.state.searchBooks.map(searchBook => {
										let shelf="none";
										
										this.props.library.map(book => (book.id === searchBook.id ? shelf = book.shelf : ""));
										return (
											<li key={searchBook.id}>
												<Book 
													book={searchBook}
													changeShelf={this.props.changeShelf}
													moveBooks={shelf}
												/>
											</li>
										);
									})}
              </ol>
            </div>
          </div>
        ); //closing bracket for return
    } //close curly brace for render()
} //closing curly brace for Search Component

export default Search;
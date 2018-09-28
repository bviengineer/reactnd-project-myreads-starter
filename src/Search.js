import React, {Component } from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class Search extends Component {
    state = {
        query: "", 
        searchedBooks: []
    }
    updateQuery = (query) => {
        this.setState({
            query: query
        })
    }
    getSearchedBooks = (query) => {
        BooksAPI.search(query).then((searchedBooks) => {
            this.setState({ searchedBooks: searchedBooks })
        })
    }
    render(){
        return( 
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                    <div className="search-books-input-wrapper">
                        <input type="text" 
                            placeholder="Search by title or author" 
                            value={this.state.query}
                            onChange={(e) => this.updateQuery(e.target.value)}/>
                    </div>
                </div>
            <div className="search-books-results">
              <ol className="books-grid">
                { this.state.searchedBooks.map(searchedBook => (
                    <li key={searchedBook.id}>
                        <Book 
                            book={searchedBook}
                        />
                    </li>
                ))
                }
              </ol>
            </div>
          </div>
        ); //closing bracket for return
    } //close curly brace for render()
} //closing curly brace for Search Component

export default Search;




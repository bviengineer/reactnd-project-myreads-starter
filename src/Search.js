import React, {Component } from 'react';
// import Book from './Book';
// import * as BooksAPI from './BooksAPI';
// import escapeRegExp from 'escape-string-regexp';

class Search extends Component {
    state = {
        query: "", 
        // searchedBooks: [] //array for books returned from search
    }

    updateQuery = (query) => {
        this.setState({
            query: query
        })
        // this.updateSearchedBooks(query)
    }

    // updateSearchedBooks = (query) => {
    //     if(query){
    //         BooksAPI.search(query).then((searchedBooks) => {             
    //             if(searchedBooks.error){
    //                 this.setState({ searchedBooks: [] });    
    //             } else {
    //                 this.setState({ searchedBooks: searchedBooks });
    //             }
    //             // this.setState({ searchedBooks: searchedBooks })
    //         })
    //     } else {
    //         this.setState({ searchedBooks: [] });
    //     }
    
    // }
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
                {/* {this.state.searchedBooks.map(searchedBook => { 
                    let shelf = "none";

                    this.props.books.map(book => (
                        book.id === searchedBook.id ? shelf = book.shelf: "none"    
                    ));

                    return
                    <li key={searchedBook.id}>
                        <Book 
                            individualBook={searchedBook}
                            updateShelfForBook={this.props.updateShelf}
                        />
                    </li>
                ))
                } */}
              </ol>
            </div>
          </div>
        ); //closing bracket for return
    } //close curly brace for render()
} //closing curly brace for Search Component

export default Search;
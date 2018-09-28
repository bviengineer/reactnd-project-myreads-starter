import React, {Component } from 'react';

class Search extends Component {
    state = {
        query: "", 
        searchedBook: []
    }
    updateQuery = (query) => {
        this.setState({
            query: query
        })
    }
    getSearchedBooks = () => {

    }
    render(){
        return( 
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                    <div className="search-books-input-wrapper">
                    {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                    */}
                        <input type="text" 
                            placeholder="Search by title or author" 
                            value={this.state.query}
                            onChange={(e) => this.updateQuery(e.target.value)}/>
                    </div>
                </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ); //closing bracket for return
    } //close curly brace for render()
} //closing curly brace for Search Component

export default Search;




import React, {Component } from 'react';
import Book from './Book.js';

class Main extends Component {
    render(){
      console.log(this.props.bookCollection); //print books fetched
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                      this.props.bookCollection
                        .filter(allBooks => allBooks.shelf === "currentlyReading")
                        .map(allBooks => (
                          <li key={allBooks.id}>
                            <Book book={allBooks} />
                          </li>
                      ))
                    }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                      this.props.bookCollection
                        .filter(allBooks => allBooks.shelf === "wantToRead")
                        .map(allBooks => (
                          <li key={allBooks.id}>
                            <Book book={allBooks} />
                          </li>
                      ))
                    }
                      {/* <li>
                        <Book />
                      </li> */}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                      this.props.bookCollection
                        .filter(allBooks => allBooks.shelf === "read")
                        .map(allBooks => (
                          <li key={allBooks.id}>
                            <Book book={allBooks} />
                          </li>
                      ))
                    }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        );
    }
}

export default Main;
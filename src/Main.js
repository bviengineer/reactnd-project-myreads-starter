import React, {Component } from 'react';
import { Link } from 'react-router-dom';
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
              
              {/*Javascript code will:
                  1. loop (map) through the collection of books
                  2. sort (filter) the books by shelf location status of "currently reading"
              */}              
              { this.props.bookCollection.filter(allBooks => allBooks.shelf === "currentlyReading").map(allBooks => (
                  <li key={allBooks.id}>
                    <Book 
                      book={allBooks} 
                      updateShelf={this.props.updateShelf}
                      activeShelf="currentlyReading" />
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
          
          {/*Javascript code will:
              1. loop (map) through the collection of books
              2. sort (filter) the books by shelf location status of "want to read"
          */}
          { this.props.bookCollection.filter(allBooks => allBooks.shelf === "wantToRead").map(allBooks => (
              <li key={allBooks.id}>
                <Book 
                  book={allBooks} 
                  updateShelf={this.props.updateShelf}
                  activeShelf="wantToRead" />
              </li>
            ))
          }
          </ol>
        </div>
      </div>
      
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          
          {/*Javascript code will:
              1. loop (map) through the collection of books
              2. sort (filter) the books by shelf location status of "read"
          */}
          {this.props.bookCollection.filter(allBooks => allBooks.shelf === "read").map(allBooks => (
            <li key={allBooks.id}>
              <Book 
                book={allBooks} 
                updateShelf={this.props.updateShelf}
                activeShelf="read" />
            </li>
          ))
          }
          </ol>
        </div>
      </div>
    </div>
  </div>
  
  {/* will manage route to the search page */}
  <div className="open-search">
    <Link 
      to="/Search">             
      Add a book
    </Link>
  </div>
</div>
);
}
}

export default Main;
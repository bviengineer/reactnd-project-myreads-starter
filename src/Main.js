/*
  CREDITS:
	  1. Maeva NAP walkthrough was instrumental during the development of this project: 
    https://www.youtube.com/watch?v=i6L2jLHV9j8&index=39&list=PLCDXYWEHWgppmc0TJlQJLu3EQJ2Lka7lg&t=3600s
    
    2. Learn ReactJS: Part1 on CodeCademy was beneficial in understanding how ReactJS works. 

  PURPOSE of Main.js:
    Main.js handles the display of books on the shelves and the identification of their status of: Read, Want to Read or Currently Reading. It also holds the link to the search page to search for additional books.  
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from './Book.js';

class Main extends React.Component {
render(){
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
  
  {/* Will manage navigation to the search page */}
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
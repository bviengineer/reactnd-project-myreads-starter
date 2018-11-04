import React from "react";
import { Book } from "./Book.js"


export class DesiredReads extends React.Component{
  render(){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
           {this.props.bookCollection.filter(allBooks => allBooks.shelf === "wantToRead").map(allBooks => (
              <li key={allBooks.id}>
                <Book 
                  book={allBooks} 
                  updateShelf={this.props.updateShelf}
                  activeShelf={this.props.activeShelf} />
              </li>
            ))
          }
          </ol>
        </div>
      </div>
    )
  }
}
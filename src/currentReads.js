import React from "react";
import { Book } from "./Book.js"

export class CurrentReads extends React.Component {
  render(){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">         
              {this.props.bookCollection.filter(allBooks => allBooks.shelf === "currentlyReading").map(allBooks => (
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
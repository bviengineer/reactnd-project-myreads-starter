import React from "react";
import { Book } from "./Book.js"


export class Reads extends React.Component{
  render(){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">          
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
    );
  }
} 
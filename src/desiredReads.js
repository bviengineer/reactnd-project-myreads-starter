import React from "react";
import { Book } from "./Book.js"


export const DesiredReads = (props) => {
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.bookCollection.filter(allBooks => allBooks.shelf === "wantToRead").map(allBooks => (
            <li key={allBooks.id}>
              <Book 
                book={allBooks} 
                updateShelf={props.updateShelf}
                activeShelf="wantToRead" />
            </li>
          ))
        }
        </ol>
      </div>
    </div>
  )
}
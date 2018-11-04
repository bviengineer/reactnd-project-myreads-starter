import React from "react";
import { Book } from "./Book.js"


export const Reads = (props) => {
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">          
          {props.bookCollection.filter(allBooks => allBooks.shelf === "read").map(allBooks => (
          <li key={allBooks.id}>
            <Book 
              book={allBooks} 
              updateShelf={props.updateShelf}
              activeShelf="read" />
          </li>
          ))
          }
        </ol>
      </div>
    </div>
  );
}
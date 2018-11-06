import React from "react";
import { Book } from "./Book.js"


//Rendering in Mains.js - shelf for all books marked as Want to Read
export const DesiredReads = (props) => {
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.wantToRead.map(allBooks => (
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
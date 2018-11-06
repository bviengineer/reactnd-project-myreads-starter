import React from "react";
import { Book } from "./compoents/Book.js"


//Rendering in Mains.js - shelf for all books marked as Currently Reading
export const CurrentReads = (props) => {
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">         
            {props.currentlyReadBooks.map(allBooks => (
              <li key={allBooks.id}>
                <Book 
                  book={allBooks} 
                  updateShelf={props.updateShelf}
                  activeShelf="currentlyReading" />
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  )
}
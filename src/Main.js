import React from 'react';
import { Header } from "./header.js";
import { CurrentReads } from './currentReads.js';
import { DesiredReads } from './desiredReads.js';
import { Reads } from './reads.js';
import { FindBooks } from "./findBooks.js";


//Rendering in App.js
export class Main extends React.Component {
  render(){
    const booksCollection = this.props.bookCollection;
    const currentReads = booksCollection.filter(book => book.shelf === "currentlyReading");
    const desiredReads = booksCollection.filter(book => book.shelf === "wantToRead");
    const read = booksCollection.filter(book => book.shelf === "read");
    return(
      <div className="list-books">
        
        {/* Header Component */}
        <Header /> 
        
        <div className="list-books-content">
          <div> 
            {/* Book Shelves */}
            <CurrentReads shelfName="Currently Reading" updateShelf={this.props.updateShelf} currentlyReadBooks ={currentReads}/>
            <DesiredReads shelfName="Want To Read" updateShelf={this.props.updateShelf} wantToRead={desiredReads}/>
            <Reads shelfName="Read" updateShelf={this.props.updateShelf} read={read}/>
          </div>
        </div>  

        {/* Find Books Componenet*/}
      <FindBooks />
    </div>
    );
  }
}

/* Will like to
-Separate Add a book & placed it it findBooks but findBooks is having an error
*/
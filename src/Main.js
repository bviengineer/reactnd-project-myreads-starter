import React from 'react';
import { Header } from "./components/header.js";
import { CurrentReads } from './components/currentReads.js';
import { DesiredReads } from './components/desiredReads.js';
import { Reads } from './components/reads.js';
import { FindBooks } from "./components/findBooks.js";


//Rendering in App.js - container that holds header, shelves and search button
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
 
        {/* FindBooks Component*/}
      <FindBooks />
    </div>
    );
  }
}
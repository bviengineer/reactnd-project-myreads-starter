import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from "./header.js";
import { CurrentReads } from './currentReads.js';
import { DesiredReads } from './desiredReads.js';
import { Reads } from './reads.js';
//import { FindBooks } from "./findBooks.js";


//Rendering in App.js
export class Main extends React.Component {
  render(){
    return(
      <div className="list-books">
        
        {/* Header Component */}
        <Header /> 
        
        <div className="list-books-content">
          <div> 
            {/* Book Shelves */}
            <CurrentReads shelfName="Currently Reading" updateShelf={this.props.updateShelf} bookCollection={this.props.bookCollection}/>
            <DesiredReads shelfName="Want To Read" updateShelf={this.props.updateShelf} bookCollection={this.props.bookCollection}/>
            <Reads shelfName="Read" updateShelf={this.props.updateShelf} bookCollection={this.props.bookCollection}/>
          </div>
        </div>  

        {/* Will manage navigation to the search page */}
      <div className="open-search">
        <Link to="/Search"> Add a book </Link>
      </div>
    </div>
    );
  }
}

/* Will like to
-Separate Add a book & placed it it findBooks but findBooks is having an error
*/
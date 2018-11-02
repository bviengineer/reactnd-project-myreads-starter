/*
  CREDITS:
	  1. Maeva NAP walkthrough was instrumental during the development of this project: 
    https://www.youtube.com/watch?v=i6L2jLHV9j8&index=39&list=PLCDXYWEHWgppmc0TJlQJLu3EQJ2Lka7lg&t=3600s
    
    2. Learn ReactJS: Part1 on CodeCademy was beneficial in understanding how ReactJS works. 

  PURPOSE of Main.js:
    Main.js handles the display of books on the shelves and the identification of their status of: Read, Want to Read or Currently Reading. It also holds the link to the search page to search for additional books.  
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentReads } from './currentReads.js';
import { DesiredReads } from './desiredReads.js';
import { Reads } from './reads.js';

//Rendering in App.js
class Main extends React.Component {
render(){
  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentReads bookCollection={this.props.bookCollection}/>
          <DesiredReads bookCollection={this.props.bookCollection}/>
          <Reads bookCollection={this.props.bookCollection}/>
        </div>
      </div>      
  
  {/* Will manage navigation to the search page */}
  <div className="open-search">
    <Link 
      to="/Search">             
      Add a book
    </Link>
  </div>
</div>
); 
}
}

export default Main;
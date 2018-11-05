/*
  CREDITS:
	  1. Maeva NAP walkthrough was instrumental during the development of this project: 
    https://www.youtube.com/watch?v=i6L2jLHV9j8&index=39&list=PLCDXYWEHWgppmc0TJlQJLu3EQJ2Lka7lg&t=3600s
    
    2. Learn ReactJS: Part1 on CodeCademy was beneficial in understanding how ReactJS works. 

  PURPOSE of App.js:
    App.js is composed of, and renders the Main and Search compnents, and handles the loading or mounting of books to their respetive shelves, in addition to the moving of books between shelves.  
*/

import React from 'react';
import { Route } from 'react-router-dom';
import { Search } from './Search.js';
import { Main } from './Main.js';
import * as API from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allBooks: []
    }
  }

  //Fetch all books from BooksAPI and add them to the books array
  componentDidMount(){
    API.getAll().then((data) => {
      this.setState({ allBooks: data})
    })
  }

  stateUpdate(){  
    API.getAll().then((data) => {
        this.setState({ allBooks: data })
      })
  }

  //Thank you to Amanda Hasenzahl (AmandaH) for her assistance on the efficieny in the changing of shelves  
  //Update shelves for each shelf type 
  updateShelf = (book, shelf) => {
    API.update(book, shelf).then( ()=> {
      this.stateUpdate();
    });
}

  render() {
    return (
      <div className="app">

      {/* Handles routing to the index page */}
        <Route exact path="/" render={() => (
          <Main 
            bookCollection={this.state.allBooks} 
            updateShelf={this.updateShelf} />
        )} />

        {/* Handles routing to the search page */}
        <Route path="/Search" render={() => ( 
          <Search 
            updateShelf={this.updateShelf}
            books={this.state.allBooks} />
        )} /> 
      </div>
    )
  }
}

export default BooksApp
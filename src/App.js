import React from 'react';
import { Route } from 'react-router-dom';
import { Search } from './components/Search.js';
import { Main } from './Main.js';
import * as API from './BooksAPI';
import './App.css';


export class BooksApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allBooks: []
    }
  }

  //Fetch all books from BooksAPI and add them to the books array
  componentDidMount(){
    this.stateUpdate();
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
import React from 'react';
import Search from './Search.js';
import Main from './Main.js';
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import './App.css'

class BooksApp extends React.Component {
  state = {
    allBooks: []
  }

  //Fetch all books from BooksAPI and add them to the books array
  componentDidMount(){
    BooksAPI.getAll().then((allBooks) => {
      this.setState({ allBooks: allBooks })
    })
  }

  //Update shelves for each shelf type 
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)

    BooksAPI.getAll().then((allBooks) => {
      this.setState({ allBooks: allBooks })
    })
  }

  render() {
    //console.log(this.state.allBooks); //print books fetched
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Main 
            bookCollection={this.state.allBooks} 
            updateShelf={this.updateShelf}  
          />
        )} />
        <Route path="/Search" render={() => (
          <Search 
            updateShelf={this.updateShelf}
            books={this.props.allBooks}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp

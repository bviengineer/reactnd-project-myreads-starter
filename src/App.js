import React from 'react';
import Search from './Search.js';
import Main from './Main.js';
import * as BooksAPI from './BooksAPI'
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
  render() {
    console.log(this.state.allBooks); //print books fetched
    return (
      <div className="app">
        <Search />
        <Main bookCollection={this.props.allBooks} />
      </div>
    )
  }
}

export default BooksApp

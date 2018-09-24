import React from 'react';
import Search from './Search.js';
import Main from './Main.js';

// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  
  }

  render() {
    return (
      <div className="app">
        <Search />
        <Main />
      </div>
    )
  }
}

export default BooksApp

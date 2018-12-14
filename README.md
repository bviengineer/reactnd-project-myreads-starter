# MyReads Project
This web application allows users to search for, and select, books. The books can be placed on different shelves by being tagged with one of several specified statuses: "Currently Reading", "Want to Read", and "Read". Users can move books between shelves and remove books from shelves by selecting a tag of "None".

The user interface for MyReads, was built using React and is part of the Udacity Front End Nanodegree, project work. A code base was provided and developed upon.

# View Project
* View a hosted copy of the project [here](https://brave-lovelace-89002e.netlify.com/)
* Alternatively, you may: 
  * Clone the repository
  * Using your command prompt (CLI), navigate to the project directory
  * Install [node package manager (npm)](https://nodejs.org/en/). Note, npm is automatically installed during the installation of node.
    * To determine if you already have node and npm installed, go to your command prompt and check the versions by typing:
      * node -v   then enter key
      * npm -v    then enter key
      * If the results of running each command returns with version numbers, node and npm are installed, otherwise, please install node/npm.
    * Run npm install to update the project with dependencies
    * Run npm start and the page will automatically open in your default browser

## Credits
* [Maeva NAP Walkthrough](https://youtu.be/i6L2jLHV9j8) was instrumental during the development of this project.
* Thank you to Kehinde (FEND) for assistsance on project.

## Backend Server
The backend server is used to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
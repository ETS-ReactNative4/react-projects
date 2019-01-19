import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieLikes from './MovieLikes';
/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Jones',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 4,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

class App extends Component {
  constructor(props){
    super(props);
	this.userMovies = {};   
	for(const profile of profiles){
      const movieID = profile.favoriteMovieID;
      const userArray = Object.values(users).filter((u) => u.id == profile.userID);
      const movie = Object.values(movies).filter(m => m.id == movieID)[0];

      //check if userMovies already has an entry for this movieID
      if(this.userMovies[movieID]){
        //concat the user array to the existing usersLiked array
        const usersLikedArray = this.userMovies[movieID].usersLiked.concat(userArray);
        this.userMovies[movieID] = {'movieName': movie.name ,'usersLiked': usersLikedArray};
      }
      else{
        //this movie id does not exist in the userMovies array, so initialize it before pushing the object
        this.userMovies[movieID]= {};
        this.userMovies[movieID] = {'movieName': movie.name ,'usersLiked': userArray};
      }  
    }
   
    //check for movies not included in profiles array. This will provide list of movies not liked by any user
    const profileMovies = profiles.map(p => p.favoriteMovieID);
    for(const m of Object.values(movies)){
      //if movieID does not exist in profiles array, add it to the userMovies array
      if(!profileMovies.includes(m.id.toString())){
      	this.userMovies[m.id] = {};
      	this.userMovies[m.id] = {'movieName': m.name, 'usersLiked': []};
      }
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
		<MovieLikes moviesLikedByUsers={this.userMovies}/>

      </div>
    );
  }
}

export default App;

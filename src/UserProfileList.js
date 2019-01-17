import React, { Component } from 'react';

class UserProfileList extends Component{
	render(){
      var users = Object.values(this.props.users);
      var profiles = this.props.profiles;
      var movies = Object.values(this.props.movies);

      return(
        <ol>
        {profiles.map((profile) => ( 
        <li key={profile.id}> {users.filter(u => u.id === profile.id).map(u => u.name)}'s favorite movie is {movies.filter(movie => movie.id == profile.favoriteMovieID).map(movie => movie.name) }
		</li>

         ))
    	}
        </ol>
      );
    }
}

export default UserProfileList;
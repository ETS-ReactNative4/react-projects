import React, { Component } from 'react';

class MovieLikes extends Component{
	render(){
      let movies = Object.values(this.props.moviesLikedByUsers);
      console.log(movies.map(m => m.movieName));
      return(        
        movies.map(m => 
        	<div key={m.movieName}>
				<h2>{m.movieName}</h2>
				<p>Liked By:</p>
				{m.usersLiked.length ? 
                 	m.usersLiked.map(u => 
                    <ul key={u.id}>
                        <li>{u.name}</li>
                    </ul>
                	) : <p>None of the current users liked this movie</p>}
			</div>)
      );
    }
}

export default MovieLikes;
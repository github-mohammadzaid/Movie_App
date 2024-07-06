import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">Rating: {movie.vote_average}</p>
        <Link to={`/movie/${movie.id}`} className="btn btn-primary">View Details</Link>
      </div>
    </div>
  );
}

export default MovieCard;
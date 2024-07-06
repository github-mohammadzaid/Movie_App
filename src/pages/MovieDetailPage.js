import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
      .then(response => response.json())
      .then(data => setMovie(data));
   
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
      .then(response => response.json())
      .then(data => setCast(data.cast));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h1>{movie.title}</h1>
      <div className="row">
        <div className="col-md-4">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="img-fluid" alt={movie.title} />
        </div>
        <div className="col-md-8">
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Cast</h3>
          <div className="row">
            {cast.slice(0, 6).map(actor => (
                            <div className="col-md-2" key={actor.id}>
                <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} className="img-fluid" alt={actor.name} />
                <p>{actor.name}</p>
                <p>{actor.character}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailPage;

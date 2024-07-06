import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

function TopRatedPage  () {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743`)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, []);

  return (
    <Container>
      <Row>
        {movies.map(movie=>(
          <Col key={movie.id} md={4}>
            <Card>
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>Rating: {movie.vote_average}</Card.Text>
                <Button as= {Link} to={`/movie/${movie.id}`} variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TopRatedPage;
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Container, Card, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import FromSearch from "./FormSearch";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?api_key="+process.env.REACT_APP_TMBD_API_KEY)
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div>
      <Container className="mt-5">
        <h1 className="text-center mb-5">React Movies 🎞️</h1>
            <FromSearch />
        <Row>
            {movies.map((movie, index) => (
                <Card key={index} className="bg-dark text-white" style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} />
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <small>Rating : {movie.vote_average}</small><br />
                            <small>Year : {movie.release_date}</small><br />
                            <Card.Text className='mt-3'>
                                {movie.overview}
                            </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <Button href={"/movie/"+movie.id} variant="primary">Show More</Button>
                    </Card.Footer>
                </Card>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default Movies;

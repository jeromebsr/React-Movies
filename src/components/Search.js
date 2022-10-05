import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Row, Button } from "react-bootstrap";
import FormSearch from './FormSearch';

function Search() {
    let search = useParams();
    console.log(search);
    const [movie, setMovie] = useState([])

    useEffect(() => {
        axios
          .get("https://api.themoviedb.org/3/search/movie?api_key="+process.env.REACT_APP_TMBD_API_KEY+"&query="+search.search)
          .then((res) => setMovie(res.data.results));
      }, []);

    return (
        <div>
            <Container className="mt-5">
                <h1 className="text-center mb-5">React Movies 🎞️</h1>
                <FormSearch />
                <Row>
                    <h2 className='mb-4'>Search results 🔎 — <Button href='/' variant='primary'>Home</Button></h2>
                    {movie.length > 0 
                    ? movie.map((movie, index) => (
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
                    )) : 
                        <div>
                            <h3>No match found ❌</h3>
                        </div>
                    }
                </Row>
            </Container>
        </div>
    );
}

export default Search;
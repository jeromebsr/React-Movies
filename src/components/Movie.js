import axios from 'axios';
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Movie() {
    let movie = useParams();
    const [datasMovie, setDatasMovie] = useState({})
    
    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/movie/'+movie.id+'?api_key='+process.env.REACT_APP_TMBD_API_KEY)
            .then((res) => setDatasMovie(res.data))
    }, [])

    return (
        <Container className='mt-5'>
            <Row>
                <Col md='3'>
                    <img width="300" src={"https://image.tmdb.org/t/p/w500/"+datasMovie.poster_path} alt='Poster of the movie' />
                </Col>
                <Col>
                    <h1>{datasMovie.title}</h1>
                    <p>⭐ Reviews : {datasMovie.vote_average} / 10</p>
                    <p>🗓️ Year : {datasMovie.release_date}</p>
                    <p>💲Budget : {datasMovie.budget && datasMovie.budget > 0 ? "$" + datasMovie.budget.toLocaleString() : 'Unknow'}</p>
                    {console.log(datasMovie.genres)}
                    <p>🎞️ Genres : {datasMovie.genres && datasMovie.genres.map((genres) => (genres.name+", "))}</p>
                    <p>💬 Overview : "{datasMovie.overview}"</p>
                    <Button href={"/"} variant="primary">Home</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Movie;
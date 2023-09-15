import React, {  useState } from 'react'
import MoviesList from '../components/MoviesList';
import Filter from '../components/Filter';
import {  Container } from "react-bootstrap";
import Movies from '../movies';

const Home = () => {
   
    // eslint-disable-next-line
      const [movieList, setMovieList] = useState(Movies);
      const [movieFiltred, setMovieFiltred] = useState(Movies);
      const filterMovie = (name, rate) => {
        console.log(movieList);
    
        const filtered = movieList.filter(
          (movie) =>
            movie.name.toLowerCase().includes(name.toLowerCase()) &&
            movie.rate >= Number(rate)
        );
        setMovieFiltred(filtered);
      };
  return (
    <>
     <Filter onfilter={filterMovie} />
      <Container>
        <MoviesList Movies={movieFiltred}></MoviesList>
   
      </Container>
    
    </>
  )
}

export default Home
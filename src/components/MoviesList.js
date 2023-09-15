import React from "react";
import { Col, Row } from "react-bootstrap";
import Movie from "./Movie"
const MoviesList = ({Movies}) => {
    const rowsOfMovies = [];
    for (let i = 0; i < Movies.length; i += 3) {
      const row = Movies.slice(i, i + 3);
      rowsOfMovies.push(row);
    }
  return (
   <>
    {rowsOfMovies.map((row, rowIndex) => (
        <Row key={rowIndex} className="p-3">
          {row.map((movie, index) => (
            <Col md={4} key={index}>
             <Movie key={index} movie={movie}/>
             </Col>
      ))}
    </Row>
    ))}
    </>
  );
};

export default MoviesList;



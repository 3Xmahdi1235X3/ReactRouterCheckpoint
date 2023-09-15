import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Movie = ({
 movie
}) => {
    console.log(movie)
  return (
    <Card style={{ width: "18rem" }} className="h-100">
      <Card.Img variant="top" src={movie.imageURL} />
      <Card.Body>
        <Card.Title><Link to={`/movie/${movie.id}`}>{movie.name}</Link></Card.Title>
        <Card.Text>
          Description: {movie.description}
          <br />
          
        
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      Rate: <h2>{movie.rate}</h2>
        
      </Card.Footer>
    </Card>
  );
};



export default Movie;

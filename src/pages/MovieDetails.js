import React from 'react'
import { Col, Container, Image, ListGroup, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Movies from '../movies'
const MovieDetails = () => {
  const {id} = useParams();
  const movie = Movies[id-1];
  return (
    <Container>
          <Link className='btn btn-primary my-3' to="/">
      Go back
    </Link>
    <Row>
      <Col md={6}>
        
        <Image src={movie.imageURL}  />

      </Col>
      <Col md={4} >
        <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{movie.name} </h3>
            </ListGroup.Item>
            
           
            <ListGroup.Item>
              Description : {movie.description}
            </ListGroup.Item>
            <ListGroup.Item>
              Rate : <h1>{movie.rate}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
                <h1>Trailer</h1>
                <iframe style={{width:"100%",height:"250px"}}
src={movie.trailerURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </ListGroup.Item>

        </ListGroup>  
      </Col>
    
    </Row>
    </Container>
  )
}

export default MovieDetails
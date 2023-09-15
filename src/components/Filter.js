import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Filter = ({onfilter}) => {
const handleFilterClick=()=>
{
    onfilter(name.current.value,rate.current.value)
}
  const name=useRef(null)
  const rate=useRef(null)
  return (
        <Container className='p-3'>
            <Row>
                <Col md={3}></Col>
                <Col md={2}>
                    
                    <input  ref={name} className='form-control' type='text' placeholder='type movie name ...'/>

                </Col>
                <Col md={2}>
                    <select ref={rate} className='form-control'>
                        <option style={{display:"none"}}>
                            Select rating 
                        </option>
                        <option value="0">
                        0
                        </option>
                        <option value="1">
                        1
                        </option>
                        <option value="2">
                        2
                        </option>
                        <option value="3">
                        3
                        </option>
                        <option value="4">
                        4
                        </option>

                    </select>
                </Col>
                <Col md={2}>
                    <button style={{width:"100%"}} className='btn btn-primary' onClick={()=>handleFilterClick()}>Filter</button>

                </Col>
                <Col md={3}>
                    
                </Col>

            </Row>
        </Container>
    )
}

export default Filter
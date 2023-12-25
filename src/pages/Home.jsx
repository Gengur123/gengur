import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function Home () {
  return(
    <>
      <Container>
        <div className='text-white'>
          <Row>
            <Col sm={12} md={8}>
              <h1>Jwong Picture</h1>
            </Col>
            <Col sm={12} md={4}>
              <div className="text-center">
              <h3>Top Weekly Clip</h3>
              <div className="border py-5">
                clips
              </div>
              <h3>Top Monthly Clip</h3>
              <div className="border py-5">
                clips
              </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default Home;
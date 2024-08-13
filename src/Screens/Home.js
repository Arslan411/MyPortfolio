import React from 'react'
import logo from '../assets/logo1.jpg';
import Cards from '../Components/Cards/Cards';
import Pic from '../assets/pic.jpg'

import { Container, Row, Col, Image } from 'react-bootstrap'
import './screen.css'

const Home = () => {

  return (
    <div className='container' >
      <Container >
        <Row>
          <Col  sm={12} lg={4} md={4}>
            <Cards title={'Project Name'} img={Pic} />
          </Col>

          <Col sm={12} lg={4} md={4}>
            <Cards title={'Project Name'} img={Pic} />
          </Col>

          <Col sm={12} lg={4} md={4}>
            <Cards title={'Project Name'} img={Pic} />
          </Col>

        </Row>

        <Row  >
          <Col   sm={12} lg={4} md={4}>
            <Cards title={'Project Name'} img={Pic} />
          </Col>

          <Col sm={12} lg={4} md={4}>
            <Cards title={'Project Name'} img={Pic} />
          </Col>

          <Col sm={12} lg={4} md={4}>
            <Cards title={'Project Name'} img={Pic} />
          </Col>

        </Row>

        <Row  >
          <Col   sm={12} lg={4} md={4}>
            <Cards title={'Project Name'} img={Pic} />
          </Col>

          <Col sm={12} lg={4} md={4}>
            <Cards title={'Project Name'} img={Pic} />
          </Col>

          <Col sm={12} lg={4} md={4}>
            <Cards title={'Project Name'} img={Pic} />
          </Col>

        </Row>

        <Row  >
          <Col   sm={12} lg={4} md={4}>
            <Cards title={'Project Name'} img={Pic} />
          </Col>

          <Col sm={12} lg={4} md={4}>
            <Cards title={'Project Name'} img={Pic} />
          </Col>

          <Col sm={12} lg={4} md={4}>
            <Cards title={'Project Name'} img={Pic} />
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Home

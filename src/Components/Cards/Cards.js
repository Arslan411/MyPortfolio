import React from 'react'
import logo from '../../assets/logo.jpg';
import './card.css';



import { Container, Row, Col, Image, CardText, Button } from 'react-bootstrap'

const Cards = (props) => {
    return (
        <div className='card-container'>
            <button className='card-btn'>
                <img className='img' src={props.img}  />
                </button>
            <CardText className='txt'>{props.title}</CardText>

        </div>
    )
}

export default Cards

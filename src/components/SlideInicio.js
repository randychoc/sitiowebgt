import React from 'react'
import './styles/Inicio.css'
import { Carousel } from 'react-bootstrap'

const SlideInicio = () => (
    <div className="container-fluid">
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 slide"
                    src="https://wallpaperaccess.com/full/1657858.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    width="80%"
                    className="d-block w-100 slide"
                    src="https://news.sap.com/latinamerica/files/2019/11/blhd.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slide"
                    src="https://www.100negocios.com/wp-content/uploads/2016/08/Empresas.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
)

export default SlideInicio
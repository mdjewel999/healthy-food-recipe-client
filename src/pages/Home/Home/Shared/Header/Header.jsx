import React from 'react';
import sliderOne from "../../../../../assets/slider-img/slider-1.jpg";
import sliderTwo from "../../../../../assets/slider-img/slider-2.jpg";
import sliderThree from "../../../../../assets/slider-img/slider-3.jpg";
import { Carousel, Container } from "react-bootstrap";
import './Header.css'

const Header = () => {
  return (
    <Container>
      <Carousel  variant="dark" > {/* style={{ height: "300px" }} */}
        <Carousel.Item interval={1000}>
          <img className="d-block w-100 sliderImg" src={sliderOne} alt="First slide" />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100 sliderImg" src={sliderTwo} alt="Second slide" />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 sliderImg" src={sliderThree} alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Header;

import React from 'react';
import sliderOne from "../../../../../assets/slider-img/slider-1.jpg";
import sliderTwo from "../../../../../assets/slider-img/slider-2.jpg";
import sliderThree from "../../../../../assets/slider-img/slider-3.jpg";
import { Carousel, Container } from "react-bootstrap";
import './Header.css'

const Header = () => {
  return (
    <Container>
      <Carousel  variant="light" > {/* style={{ height: "300px" }} */}
        <Carousel.Item interval={1000}>
          <img className="d-block w-100 sliderImg" src={sliderOne} alt="First slide" />
          <Carousel.Caption>
            <h5 className='text-light slider_title'>Grilled Salmon with Avocado Salsa</h5>
            <p className='text-light slider_para'>Kate Heddings is an experienced food writer and editor with a deep understanding of chefs, restaurants and recipes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100 sliderImg" src={sliderTwo} alt="Second slide" />
          <Carousel.Caption>
            <h5 className='text-light slider_title'>Spinach and Feta Stuffed Chicken</h5>
            <p className='text-light slider_para'>Kate Heddings is an experienced food writer and editor with a deep understanding of chefs, restaurants and recipes</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 sliderImg" src={sliderThree} alt="Third slide" />
          <Carousel.Caption>
            <h5 className='text-light slider_title'>Grilled Salmon with Avocado Salsa</h5>
            <p className='text-light slider_para'>
            Kate Heddings is an experienced food writer and editor with a deep understanding of chefs, restaurants and recipes
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Header;

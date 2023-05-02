import React from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import logo from "../../../../../assets/logo/logo.jpg"

const NavigationBar = () => {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
        <Container>
          <Navbar.Brand href="#home">Healthy Food Recipe</Navbar.Brand>
             {/* <img src={logo} alt="" /> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#pricing">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">career</Nav.Link>
            </Nav>
            <Nav>
              <Button variant="secondary">LogOut</Button>

              <Link to="/login">
                <Button variant="secondary">Login</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;

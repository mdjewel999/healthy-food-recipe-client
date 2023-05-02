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
             {/* <img style={{ height: "40px" }} src={logo} alt=""  roundedCircle /> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link className='text-decoration-none mt-2' to="/">Home</Link>
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

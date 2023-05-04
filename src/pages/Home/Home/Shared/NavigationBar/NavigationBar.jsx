import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../../../providers/AuthProvider';
import './NavigationBar.css'

const NavigationBar = () => {

  const { user , logOut} = useContext(AuthContext);


const handleLogOut =() =>{
    logOut()
    .then()
    .catch(error =>{
        console.log(error);
    })
}

  return (
    <Container>
      <Navbar className='navebar_list' collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="#home"><span className='health'>HEALTHY</span> <span className='food'>FOOD</span> <span className='recipe'>RECIPE</span></Navbar.Brand>
             {/* <img style={{ height: "40px" }} src={logo} alt=""  roundedCircle /> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto menu">
              <Link className='text-decoration-none mt-1 mx-4 menu_link' to="/category/0">Home</Link>
              <Link className='text-decoration-none mt-1 mx-4 menu_link' to="/qustion">Blog</Link>
              <Link className='text-decoration-none mt-1 mx-4 menu_link'>About</Link>
              <Link className='text-decoration-none mt-1 mx-4 menu_link'>Service</Link>
              <Link className='text-decoration-none mt-1 mx-4 menu_link'>Shop</Link>
              
            </Nav>
            <Nav>
              {user && (
                <FaUserCircle className='person' style={{ fontSize: "2rem" }}></FaUserCircle>
              )}

              {user ? (
                <Button className='btn_login' onClick={handleLogOut} variant="secondary">LogOut</Button>
              ) : (
                <Link to="/login">
                  <Button className='btn_login' variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;

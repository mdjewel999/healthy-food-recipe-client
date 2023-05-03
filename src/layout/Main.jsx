import React from 'react';
import Header from "../pages/Home/Home/Shared/Header/Header";
import Footer from "../pages/Home/Home/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import NavigationBar from "../pages/Home/Home/Shared/NavigationBar/NavigationBar";
import RightNav from "../pages/Home/Home/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
        <NavigationBar></NavigationBar>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={8}>
            <Outlet></Outlet>
          </Col>
          
          <Col lg={4}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;

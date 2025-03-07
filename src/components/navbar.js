import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/img/logo.JPG";

const NavbarComponent = () => {
  return (
    <Navbar className="navbar">
      <Navbar.Brand href="#home" className="mx-auto">
        <img src={logo} alt="Hotel Logo" width="120" />
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavbarComponent;

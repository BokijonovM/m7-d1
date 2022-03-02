import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";

function MyHeader(props) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand>Hello World!</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyHeader;

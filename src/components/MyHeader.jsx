import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./style.css";

function MyHeader(props) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Hello World!</Navbar.Brand>
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

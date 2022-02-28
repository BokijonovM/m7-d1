import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";

function MyHeader() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Hello World!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="primary" size="sm">
          View
        </Button>
      </Navbar>
    </div>
  );
}

export default MyHeader;

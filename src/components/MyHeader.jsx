import React from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";

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
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 shadow-none"
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyHeader;

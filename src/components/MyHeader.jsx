import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MyHeader() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Hello World!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Button
            className="ml-2 shadow-none"
            variant="primary"
            size="sm"
            onclick={() => navigate("/fav")}
          >
            Favorites
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyHeader;

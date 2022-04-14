import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from '../../../images/logo.png';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth)
  }
  return (
    <Navbar bg="primary" collapseOnSelect sticky="top" expand="md" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={logo} height='30px' alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link eventKey={1} as={Link} to="home">Home</Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="services">Services</Nav.Link>
            <NavDropdown title="Shop" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Products</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cart
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Category</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
            { 
              user ? 
              <button onClick={handleSignOut} className="btn btn-secondary">Sign Out</button>
              : 
              <Nav.Link as={Link} to="login"> Login</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

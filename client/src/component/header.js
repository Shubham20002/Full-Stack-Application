import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link,NavLink} from 'react-router-dom';

export default function Header() {
  return (
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to={'/'} style={{paddingLeft: 13, textDecoration: 'none'}}><Navbar.Brand href="#home">Fullstck App</Navbar.Brand></NavLink>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={'/additem'} style={{ textDecoration: 'none'}}> <Nav.Link href="#link">Additem</Nav.Link></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )}

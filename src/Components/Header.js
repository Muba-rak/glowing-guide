import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../images/Headerlogo.png'
import '../Styles/Header.css'

const Header = () => {
  return (
    <div>
        <Navbar bg="primary" expand="lg" className='header'>
            <Container>
                <Navbar.Brand >  <img src={Logo} alt= 'logo' /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto header_right">
                    <Nav.Link > <h4>Join</h4></Nav.Link>
                    <Nav.Link >  <h4>Members Login</h4></Nav.Link>
                    <Nav.Link ><h4>Success stories</h4></Nav.Link>
                    <Nav.Link ><h4>Support</h4></Nav.Link>
                </Nav> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
     
    </div>
  )
}

export default Header
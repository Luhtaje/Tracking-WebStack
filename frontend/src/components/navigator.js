import React from 'react';
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../index.css';


class Navigator extends React.Component {

    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand as={Link} to="home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="notfound">Groups</Nav.Link>
                        <Nav.Link as={Link} to="tracking">Tracking</Nav.Link>
                        <Nav.Link as={Link} to="notfound">About</Nav.Link>
                    </Nav>
                    <Nav>
                    <NavDropdown title="More" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to="notfound">Profile</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="notfound">Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="notfound">Sign in/Log in</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        )
    }
}

export default Navigator;
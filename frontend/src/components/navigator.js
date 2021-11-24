import React from 'react';
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
import '../index.css';


class Navigator extends React.Component {

    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#linkgoeshere">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Groups</Nav.Link>
                        <Nav.Link href="#">Tracking</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                    </Nav>
                    <Nav>
                    <NavDropdown title="More" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Sign in/Log in</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        )
    }
}

export default Navigator;
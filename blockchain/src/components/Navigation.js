import { Component } from "react";
import React from "react";
import { Navbar, Nav, Container} from 'react-bootstrap';

class Navigation extends Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">BlockChain</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="settings">Settings</Nav.Link>
                        <Nav.Link href="transactions">Create Transaction</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
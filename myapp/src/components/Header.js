import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Digimons</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/favorite">Favourite</Nav.Link>

    </Nav>

  </Navbar.Collapse>
</Navbar>
            </div>
        )
    }
}

export default Header

import React from "react";
import "./Navbar.css";
import { Navbar, Nav} from "react-bootstrap";


function NavigationBar(props) {
  
    return (
        <Navbar
        className="custom-navbar"
        collapseOnSelect
        variant="dark"
        expand="sm"
        sticky="top"
      >
        <Nav.Link className="navbar-brand" href="/">
          ACME Sensor Data
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/simulator">IOT Sensor Simulation</Nav.Link>
            <Nav.Link href="/dashboard">Prototype Dashboard</Nav.Link>
            
    
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  export default (NavigationBar);
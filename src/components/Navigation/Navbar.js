import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";


function NavigationBar(props) {
    const [message, setMessage] = useState({ title: "", body: "", show: false });
    const [showEdit, setShowEdit] = useState(false);
  
    
  
    const renderComponent = (msg) => {
      setMessage({
        title: msg.title,
        body: msg.body,
        show: message.show ? false : true,
      });
    };
  
    
    
  
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
            
            <Nav.Link href="/dashboard">IOT Sensor Simulation</Nav.Link>
            <Nav.Link href="/simulator">Prototype Dashboard</Nav.Link>
    
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  export default (NavigationBar);
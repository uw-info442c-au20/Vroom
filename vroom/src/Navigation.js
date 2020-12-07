import React from 'react';
 
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
 
const Navigation = () => {
    return (
       <div>
         <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Carbon Emissions</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                  <NavLink to="/">Facts</NavLink>
                  <NavLink to="/Calculator">Calculator</NavLink>
                  <NavLink to="/Resources">Resources</NavLink>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
       </div>
    );
}
 
export default Navigation;
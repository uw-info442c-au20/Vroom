import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import ListGroup from 'react-bootstrap/ListGroup';
 
const Resources = () => {

    return (
       <div>
         <h1>Resources</h1>
         <p>Resource page body content</p>
         <h2>Filter by Type</h2>
         <DropdownButton id="dropdown-basic-button" title="Resource Type">
            <Dropdown.Item>General Resources</Dropdown.Item>
            <Dropdown.Item>Informational</Dropdown.Item>
            <Dropdown.Item>Studies</Dropdown.Item>
         </DropdownButton>

         <div id="general">
            <Card style={{ width: '18rem' }}>
               <Card.Body>
                  <Card.Title>General Resource 1</Card.Title>
                  <Card.Text>
                     Some quick example text to build on the card title and make up the bulk of
                     the card's content.
                  </Card.Text>
               </Card.Body>
            </Card>
         </div>

         <div id="info">
            <Card style={{ width: '18rem' }}>
               <Card.Body>
                  <Card.Title>Informational Resource 1</Card.Title>
                  <Card.Text>
                     Some quick example text to build on the card title and make up the bulk of
                     the card's content.
                  </Card.Text>
               </Card.Body>
            </Card>
         </div>

         <div id="studies">
            <Card style={{ width: '18rem' }}>
               <Card.Body>
                  <Card.Title>Studies Resource 1</Card.Title>
                  <Card.Text>
                     Some quick example text to build on the card title and make up the bulk of
                     the card's content.
                  </Card.Text>
               </Card.Body>
            </Card>
         </div>

         <h2>Local Public Transportation Services</h2>
         <ListGroup>
            <ListGroup.Item><a href="https://orcacard.com/ERG-Seattle/p1_001.do">ORCA</a></ListGroup.Item>
         </ListGroup>   
       </div>
    );
}
 
export default Resources;
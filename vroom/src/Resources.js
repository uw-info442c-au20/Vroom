import React from 'react';
import Card from 'react-bootstrap/Card';
 
const Resources = () => {
    return (
       <div>
          <h1>Resources</h1>
          <p>Resource page body content</p>
            <Card style={{ width: '18rem' }}>
               <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                     Some quick example text to build on the card title and make up the bulk of
                     the card's content.
                  </Card.Text>
               </Card.Body>
            </Card>
       </div>
       
    );
}
 
export default Resources;
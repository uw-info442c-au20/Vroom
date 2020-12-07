import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Resources = () => {

    return (
       <div>
         <h1>Resources</h1>
         <p>Here are resources you can use to learn more about Carbon Emissions.</p>
         <h2>Filter by Type</h2>

         <Accordion defaultActiveKey="0">
            <Card>
               <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                     General Resources
                  </Accordion.Toggle>
               </Card.Header>
               <Accordion.Collapse eventKey="0">
                  <Card.Body>
                     <div style={{display: 'flex', flexDirection: 'row'}}>
                        <Card style={{ width: '18rem', flex: 1 }}>
                           <Card.Body>
                              <Card.Title><a href="https://www.epa.gov/greenvehicles/fast-facts-transportation-greenhouse-gas-emissions">Fast Facts on Transportation Greenhouse Gas Emissions</a></Card.Title>
                              <Card.Text>
                              The transportation sector is one of the largest contributors to anthropogenic U.S. greenhouse gas (GHG) emissions.
                              </Card.Text>
                           </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', flex: 1 }}>
                           <Card.Body>
                              <Card.Title><a href="https://www.epa.gov/ghgemissions/global-greenhouse-gas-emissions-data">Global Greenhouse Gas Emissions Data</a></Card.Title>
                              <Card.Text>
                                 On This Page:
                                 Global Emissions by Gas,
                                 Global Emissions by Economic Sector,
                                 Trends in Global Emissions, and
                                 Emissions by Country
                              </Card.Text>
                           </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', flex: 1 }}>
                           <Card.Body>
                              <Card.Title><a href="https://www.cnn.com/2019/09/08/us/carbon-footprint-facts-trnd/index.html">What you need to know about carbon footprints</a></Card.Title>
                              <Card.Text>
                              From using less plastic to eating less meat, it seems like almost all anyone is talking about these days are ways to reduce our carbon footprints.
                              But what is a carbon footprint, exactly? And how is it related to the climate crisis? Here are some answers.
                              </Card.Text>
                           </Card.Body>
                        </Card>
                     </div>
                  </Card.Body>
               </Accordion.Collapse>
            </Card>
            <Card>
               <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                     Studies and Research
                  </Accordion.Toggle>
               </Card.Header>
               <Accordion.Collapse eventKey="2">
                  <Card.Body>
                     <div style={{display: 'flex', flexDirection: 'row'}}>
                        <Card style={{ width: '18rem', flex: 1 }}>
                           <Card.Body>
                              <Card.Title><a href="https://www.iaee.org/en/publications/ejarticle.aspx?id=2626">Unintended Consequences of Carbon Policies: Transportation Fuels, Land-Use, Emissions, and Innovation</a></Card.Title>
                              <Card.Text>
                                 Stephen P. Holland, Jonathan E. Hughes, Christopher R. Knittel, Nathan C. Parker
                              </Card.Text>
                           </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', flex: 1 }}>
                           <Card.Body>
                              <Card.Title><a href="https://link.springer.com/chapter/10.1007/978-3-319-17175-3_2">Transportation Emissions: Some Basics</a></Card.Title>
                              <Card.Text>
                              Christos A. Kontovas, Harilaos N. Psaraftis
                              </Card.Text>
                           </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', flex: 1 }}>
                           <Card.Body>
                              <Card.Title><a href="https://rosap.ntl.bts.gov/view/dot/23588">Reducing greenhouse gas emissions from U.S. transportation</a></Card.Title>
                              <Card.Text>
                              David L. Greene, Howard H. Baker, Jr., Steven E. Plotkin
                              </Card.Text>
                           </Card.Body>
                        </Card>
                     </div>
                  </Card.Body>
               </Accordion.Collapse>
            </Card>
         </Accordion>

         <h2>Local Public Transportation Services</h2>
         <ListGroup>
            <ListGroup.Item><a href="https://orcacard.com/ERG-Seattle/p1_001.do">ORCA</a></ListGroup.Item>
            <ListGroup.Item><a href="https://www.soundtransit.org/schedules/route/40_100479">Sound Transit</a></ListGroup.Item>
            <ListGroup.Item><a href="https://kingcounty.gov/depts/transportation/metro/travel-options/bus.aspx">King County Metro</a></ListGroup.Item>
            <ListGroup.Item><a href="https://www.seattle.gov/transportation/getting-around">Seattle Department of Transportation</a></ListGroup.Item>
         </ListGroup>   
       </div>
    );
}
 
export default Resources;
import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
 
const Facts = () => {
    return (
       <div>
           <h1>Facts about Carbon Emissions</h1>
           <CardDeck>
               <Card>
                   <Card.Body>
                        <Card.Title>What are carbon emissions?</Card.Title>
                            <Card.Text>
                                When we talk about carbon emissions, we are specifically focusing on carbon dioxide (CO2).
                                Carbon dioxide is released into our atmosphere in multiple ways. According to the United
                                States Environmental Protection Agency, transportation generates the largest share of
                                greenhouse gas emissions with 28.2 percent. The increase of carbon emissions causes an
                                effect known as global warming. Global warming occurs when greenhouse gases collect in the
                                atmosphere and asorb sunlight and solar radiaton that have bounced off the earth's surface.
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src="https://i.imgur.com/qOXk49S.jpg"/>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>Why should we be concerned with carbon emissions?</Card.Title>
                            <Card.Text>
                                Carbon emissions are a form of greenhouse gas that traps heat within the Earth’s 
                                atmosphere and causes global temperatures to rise. According to studies, the largest 
                                source of greenhouse gas emissions have been caused by human activities. This includes 
                                the burning of fossil fuels for electricity, heat, and transportation. Global
                                temperature increases bring along increases in sea levels, heat waves, droughts, and
                                hurricane intensities.
                            </Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" src="https://i.imgur.com/6GiIWmJ.jpg"/>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>How can we reduce our carbon footprint?</Card.Title>
                            <Card.Text>
                                A carbon footprint is the total amount of greenhouse gas emissions that come from the 
                                production and usage of a product or service. This includes carbon dioxide which is a gas 
                                that is most commonly emitted by humans. The bulk of an individual’s carbon footprint will 
                                come from transportation, housing, and food. While real solutions require actions on a 
                                global scale, there are choices that you can make in your everyday life to lessen your personal 
                                impact on the environment.
                            </Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" src="https://i.imgur.com/j5BMD4C.jpg"/>
                </Card>
            </CardDeck>
       </div>
    );
}

export default Facts;
import React from 'react';
import{Card} from 'react-bootstrap';
import{Container, Row, Col} from 'react-bootstrap';
import aboutPic from '../pics/one.jpg';

const AboutLayout = ()=>{
    return(
        <div className="container-div">
            <Container>
                <Row>
                    <Col md={6} >
                        
                    </Col>
                    <Col md={6}>
                        <Card className="about-card">
                            <Card.Img src={aboutPic} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
       </div>
    )
}
export default AboutLayout
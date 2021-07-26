import React from 'react';
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import{Navbar, Nav, Container, Row, Col} from 'react-bootstrap';


const FooterLayout = ()=>{
   
    return(
        <>
        <Navbar id="footer">
        <Container>
            <Navbar.Brand>
                <p>&copy; Created with <FontAwesomeIcon icon={faHeart} size="0.9x"/> by Nives</p>
            </Navbar.Brand>
            <Nav className="ml-auto py-2">
                <Row className="justify-content-center">
                    <Col><Nav.Link href="https://twitter.com/nives__olive" target='_blank'><FontAwesomeIcon icon={faTwitter} size="2x"/></Nav.Link></Col>
                    <Col><Nav.Link href="https://www.linkedin.com/in/olive-nives-nameere" target='_blank'><FontAwesomeIcon icon={faLinkedin} size="2x"/></Nav.Link></Col>
                        
                </Row>  
            </Nav>
        </Container>
        </Navbar>
        </>
    )
}

export default FooterLayout;
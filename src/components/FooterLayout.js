import React from 'react';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import{ Nav, Container, Row, Col} from 'react-bootstrap';


const FooterLayout = ()=>{
   
    return(
        <>
        <div id="footer">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col><p className="footer-p">&copy; Created with <FontAwesomeIcon icon={faHeart} size="0.9x"/> by Nives</p></Col>
                    <Col><Nav.Link href="https://www.linkedin.com/in/olive-nives-nameere" target='_blank'><FontAwesomeIcon icon={faLinkedin} size="2x"/></Nav.Link></Col>  
                </Row>  
            
            </Container>
        </div>
        </>
    )
}

export default FooterLayout;

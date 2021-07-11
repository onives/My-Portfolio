import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import{Navbar, Nav, Container, Row, Col, Form} from 'react-bootstrap';
import logo from '../pics/logoNN.png'

const NavigationBar = ({onChange})=>{
    return(
        <>
        <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home"><img src={logo} alt="my logo" className='logo-nav'/></Navbar.Brand>
                <Navbar.Brand><Form.Check onClick={onChange} type='switch' label={<FontAwesomeIcon icon={faMoon} size="1.5x" style={{color:'#ffbd39'}}/>} id='switch-mode'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto py-3">
                        <Nav.Link href="#about" className="px-4">about</Nav.Link>
                        <Nav.Link href="#projects" className="px-4" >projects</Nav.Link>
                        <Nav.Link href="#blogs" className="px-4">blogs</Nav.Link>
                        <Nav.Link href="#contact"className="px-4" >contact</Nav.Link>
                        <Row className="justify-content-center">
                            <Col><Nav.Link href="https://twitter.com/nives__olive" target='_blank'><FontAwesomeIcon icon={faTwitter} size="2x"/></Nav.Link></Col>
                            <Col><Nav.Link href="https://www.linkedin.com/in/olive-nives-nameere" target='_blank'><FontAwesomeIcon icon={faLinkedin} size="2x"/></Nav.Link></Col>
                            <Col><Nav.Link href="https://www.instagram.com/nives__olive/?hl=en" target='_blank'><FontAwesomeIcon icon={faInstagram} size="2x"/></Nav.Link></Col>
                        </Row>   
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default NavigationBar;
import React,{useState, useEffect} from 'react';
import {LinkContainer} from 'react-router-bootstrap'
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import{Navbar, Nav, Container, Row, Col, Form} from 'react-bootstrap';
import logo from '../pics/logoNN.png';


const DARK_CLASS = "dark";

const NavigationBar = ()=>{
    const systemPrefersDark = useMediaQuery(
        {
          query: "(prefers-color-scheme: dark)"
        },
        undefined,
        prefersDark => {
          setIsDark(prefersDark);
        }
    );

    const [isDark, setIsDark] = useState(systemPrefersDark);

    // if (localStorage.getItem('dark-theme')) {
    //     document.documentElement.classList.add(DARK_CLASS)
    // }

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add(DARK_CLASS)
            localStorage.setItem('dark-theme', true);
        } else {
            document.documentElement.classList.remove(DARK_CLASS)
            localStorage.removeItem('dark-theme');
        }
        
    }, [isDark]);

    const changeTheme = ()=>{
        setIsDark(!isDark)
    }
    
    return(
        <>
        <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/" className="logo-brand"><img src={logo} alt="my logo" className='logo-nav'/></Navbar.Brand>
                <Navbar.Brand><Form.Check onChange={changeTheme} type='switch' label={<FontAwesomeIcon icon={isDark ? faSun : faMoon} size="1x" style={{color:'#ffbd39'}}/>} id='switch-mode'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto py-1">
                        <LinkContainer to='/'><Nav.Link className="px-4">About</Nav.Link></LinkContainer>
                        <LinkContainer to='projects'><Nav.Link className="px-4" >Projects</Nav.Link></LinkContainer>
                        <LinkContainer to='blogs'><Nav.Link className="px-4">Blogs</Nav.Link></LinkContainer>
                        <LinkContainer to='contact'><Nav.Link className="px-4" >Contact 👋</Nav.Link></LinkContainer>
                        
                        <Row className="justify-content-center">
                            <Col className="centered-icon"><Nav.Link href="https://twitter.com/nives__olive" target='_blank'><FontAwesomeIcon icon={faTwitter} size="lg"/></Nav.Link></Col>
                            <Col className="centered-icon"><Nav.Link href="https://www.linkedin.com/in/olive-nives-nameere" target='_blank'><FontAwesomeIcon icon={faLinkedin} size="lg"/></Nav.Link></Col>
                            <Col className="centered-icon"><Nav.Link href="https://www.instagram.com/nives__olive/?hl=en" target='_blank'><FontAwesomeIcon icon={faInstagram} size="lg"/></Nav.Link></Col>
                        
                        </Row>   
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default NavigationBar;

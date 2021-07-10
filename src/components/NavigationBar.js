import React from 'react';
import{Navbar, Nav, Container, Row, Col} from 'react-bootstrap';

const NavigationBar = ()=>{
    return(
        <>
        <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Navbar.Brand href="#home">Switch</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto py-3">
                        <Nav.Link href="#about" className="px-4">about</Nav.Link>
                        <Nav.Link href="#projects" className="px-4" >projects</Nav.Link>
                        <Nav.Link href="#blogs" className="px-4">blogs</Nav.Link>
                        <Nav.Link href="#contact"className="px-4" >contact</Nav.Link>
                        <Row className="justify-content-center">
                            <Col><Nav.Link href="#twiiterpage">twitter</Nav.Link></Col>
                            <Col><Nav.Link href="#linkedpage">linkedIn</Nav.Link></Col>
                            <Col><Nav.Link href="#instapage">Insta</Nav.Link></Col>
                        </Row>   
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default NavigationBar;
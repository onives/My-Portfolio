import React, {useState, useEffect} from 'react';
import{Container, Row, Col, Image} from 'react-bootstrap';
import devPic from '../pics/dev.png';
import FooterLayout from './FooterLayout';
import axios from 'axios';
import env from 'react-dotenv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faHtml5, faJsSquare } from "@fortawesome/free-brands-svg-icons";

let nameDesign = '<Nameere Olive Nives />';

const AboutLayout = ()=>{
    const [bio, setBio] = useState('');

    useEffect(()=>{
        axios.get(`${env.remoteApi}user/me/${env.myId}`)
        .then(res=>{
            setBio(res.data.bio)
        })
    }, [])

    return(
        <>
            <div className="container-div">
                <div className="bio-div">
                    <h2 className="titles">{nameDesign}</h2>
                    <p className="bio-paragraph">{bio}</p>
                </div>
                <Container>
                    <Row>
                        <Col lg={6} md={12}>
                            <div><Image src={devPic} thumbnail className="pentagon-pic"/></div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className="bio-section2">
                                <p className="bio-section2-paragraph">I love creating things that <span className="squiggle">make</span> people's lives <span className="squiggle">simpler</span></p>
                            </div>
                            <Container>
                            <Row className="skills-icons">
                                <Col md={3} xs={3}><div><FontAwesomeIcon icon={faReact} size="4x"/></div></Col>
                                <Col md={3} xs={3}><div><FontAwesomeIcon icon={faJsSquare} size="4x"/></div></Col>
                                <Col md={3} xs={3}><div><FontAwesomeIcon icon={faNodeJs} size="4x"/></div></Col>
                                <Col md={3} xs={3}><div><FontAwesomeIcon icon={faHtml5} size="4x"/></div></Col>
                            </Row>
                </Container>
                        </Col>
                    </Row>
                </Container>
                
            </div>
            <FooterLayout/>
       </>
    )
}
export default AboutLayout

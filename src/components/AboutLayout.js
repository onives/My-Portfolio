import React, {useState, useEffect} from 'react';
import{Container, Row, Col, Card, Image} from 'react-bootstrap';
import aboutPic from '../pics/one.jpg';
// import starPic from '../pics/star.JPG'
import FooterLayout from './FooterLayout';
import axios from 'axios';
import env from 'react-dotenv';

let nameDesign = '<Nameere Olive Nives />';

const AboutLayout = ()=>{
    const [bio, setBio] = useState('');

    useEffect(()=>{
        axios.get(`${env.remoteApi}user/me/${env.myId}`)
        .then(res=>{
            console.log(res.data)
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
                        <Col md={6}>
                            <div><Image src={aboutPic} thumbnail className="pentagon-pic"/></div>
                        </Col>
                        <Col md={6} className="biography">
                            
                        </Col>
                    </Row>
                </Container>
            </div>
            <FooterLayout/>
       </>
    )
}
export default AboutLayout

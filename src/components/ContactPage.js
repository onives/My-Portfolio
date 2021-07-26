import React, {useState} from 'react';
import { Button, Row, Col, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import FooterLayout from './FooterLayout';

const ContactPage = ()=>{
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const [loading, setLoading] = useState(false);
  

    const handleEmailChange = (e)=>{
        //check if input is not empty string
        setEmail(e.target.value);
        // setFormIsValid(
        //     e.target.value.includes('@') && password.trim().length > 6
        // );
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        setLoading(true)
        
        axios.post("http://localhost:4000/user/login", {fullName, email, message})
        .then(res=>{
            setLoading(false)
            console.log(res)
            setTimeout(()=>{
                setSuccess(false)
            }, 2000)
            setSuccess(true)
        })
        .catch(error =>{
            setLoading(false)
            console.log(error)
            setTimeout(()=>{
                    setFailure(false)
                }, 5000)
            setFailure(true)
        })
       

       setFullName('');
       setEmail('');
       setMessage('');
    }

    return(
        <>
        <div className="container-div">
            <h2 className="titles">Contact me</h2>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="">
                            <p className="contact-paragraph">nnnnnnnnn</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        Form here..............
                    </Col>
                </Row>
            </Container>
        </div>
        <FooterLayout/>
        </>
        
    )

}
export default ContactPage
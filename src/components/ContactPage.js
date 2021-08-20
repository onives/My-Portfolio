import React, {useState} from 'react';
import { Button, Row, Col, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import FooterLayout from './FooterLayout';
import env from 'react-dotenv';

const ContactPage = ({history})=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const [loading, setLoading] = useState(false);


    const submitHandler =  (e)=>{
        e.preventDefault()
        
        setLoading(true)
        axios.post(`${env.remoteApi}contact`, {name, email, message})
      
        setTimeout(()=>{
            setSuccess(false)
            history.push('/contact')
        }, 5000)

        setTimeout(()=>{
            setSuccess(true)
            setLoading(false)
        }, 2000)

       setName('');
       setEmail('');
       setMessage('');
    }

    return(
        <>
        <div className="container-div">  
                <div className="section-paragraph-div">
                    <h2 className="titles">Get in touch</h2>
                    <p className="section-paragraph">Are you in need of an application that gets results? Maybe you just want to say hello? Feel free to reach out to me and let's talk.
                    My DMs are also open on Twitter and/or linkedIn (link below) if you prefer to chat there</p>
                    
                </div>
           
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="contact-me">
                            <h4>Lets talk about projects</h4>
                            <p> I work on both Small and Big projects with equal enthusiasm. I love working as part of a team, but not limited to that, I also possess the
                                ability to develop and build amazing applications on my own <br></br> <br></br>
                                C'mon don't hesitate, hit me up and lets create something great! 
                            </p>
                            <ul>
                                <li>+256700171844</li><li>nameere.olive@gmail.com</li> 
                            </ul>
                        </div>
                    </Col>
                    <Col md={6}>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Your Name:</Form.Label>
                            <Form.Control value={name} type="text" placeholder="Enter Full Name" onChange={(e)=>{setName(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Email:</Form.Label>
                            <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
                            <Form.Text className="text-muted">
                                I'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your message:</Form.Label>
                            <Form.Control value={message} as="textarea" rows={3} onChange={(e)=>{setMessage(e.target.value)}}/>
                        </Form.Group>
                        {!loading && <Button type="submit" className="main-btn">Submit</Button>}
                        {loading && <p className="isLoading">Sending Message...</p>}
                        {failure && <p className='unsuccessful-alert'>Message not sent. Please check your internet connection and try again</p>}
                        {success && <p className='successful-alert'>Thank you for reaching out! Your Message has been sent</p>}
                    </Form>
                    </Col>
                </Row>
            </Container>
        </div>
        <FooterLayout/>
        </>
        
    )

}
export default ContactPage

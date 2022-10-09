import React from "react";
import { Container, Row, Col } from "reactstrap";
import Form from "../form/Form";
import './contact.css';
// import emailjs from 'emailjs-com'

const Contact = ()=>{
    // const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     emailjs.sendForm('service_4stajoa', 'template_7wq26j9', form.current, 'user_0A2LgHh2yNQZGgNPk3b2G')
    // }

    return <section id='contact'>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <h2>Get In Touch</h2>
                </Col>

                <Col lg='6' md='6'>
                    <div className="contact__info-container d-flex align-items-center gap-5">
                        <div className="single__info-box w-50">
                            <h6>Address</h6>
                            <p>Rewari, Haryana, India</p>
                        </div>
                        <div className="single__info-box w-50">
                            <h6>Phone</h6>
                            <p>+91 8708373309</p>
                        </div>
                    </div>

                    <div className="contact__info-container d-flex align-items-center gap-5">
                        <div className="single__info-box w-50">
                            <h6>Email</h6>
                            <p>vikasraria14@gmail.com</p>
                        </div>
                        <div className="single__info-box w-50">
                            <h6>Location</h6>
                            <p>Rewari</p>
                        </div>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <Form/>
                </Col>
            </Row>
        </Container>
    </section>
}


export default Contact
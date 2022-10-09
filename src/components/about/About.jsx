import React, { useState } from 'react'
import './about.css'

import { Container, Row, Col } from 'reactstrap'

import Education from './Education'
import Skills from './Skills'


const About = () => {
    const [aboutFilter, setAboutFilter] = useState('ABOUT')

    return <section id="about">
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <h2>About me</h2>{" "}
                </Col>

                <Col lg='4' md='3' className="detailNameTable">
                    <div className="about__btns d-flex flex-column align-items-center">
                        <button className={`about__btn ${aboutFilter === 'ABOUT' ? 'about__btn-active' : ''}`} onClick={() => setAboutFilter('ABOUT')}>About me</button>
                        <button className={`about__btn ${aboutFilter === 'EDUCATION' ? 'about__btn-active' : ''}`} onClick={() => setAboutFilter('EDUCATION')}>Education</button>
                        <button className={`about__btn ${aboutFilter === 'SKILLS' ? 'about__btn-active' : ''}`} onClick={() => setAboutFilter('SKILLS')}>Skills</button>
                        </div>
                </Col>

                <Col lg='8' md='3' className="dataTable">
                    {
                        aboutFilter === 'ABOUT' && (
                            <div className="about__content__wrapper d-flex gap-5">
                                
                                <div className="about__content w-75">
                                    <h2>I am Vikas Raria</h2>
                                    <p>Motivated software engineer looking to pursue a
                                        successful career in Software development at a
                                        fast paced organization, where I can help in the
                                        delivery of state-of-the-art software solutions.
                                        Experience includes coding, troubleshooting, and
                                        testing for my personal projects. Relevant skills
                                        include C++, Data Structures, HTML5,
                                        CSS3, JavaScript, ReactJs, Redux, NodeJs, Express and MongoDb.</p>
                                    <div className="social__links">
                                        <h6 className='mb-3'>Connect with me:</h6>
                                        <span><a rel="noreferrer" href='https://wa.me/+918708373309' target="_blank"><i className="ri-whatsapp-fill"></i></a></span>
                                        <span><a rel="noreferrer" href='mailto:vikasraria14@gmail.com' target="_blank"><i className="ri-mail-send-line"></i></a></span>
                                        <span><a rel="noreferrer" href='https://github.com/vikasraria14' target="_blank"><i className="ri-github-line"></i></a></span>
                                        <span><a rel="noreferrer" href='https://www.instagram.com/rariavikas/' target="_blank"><i className="ri-instagram-line"></i></a></span>
                                        <span><a rel="noreferrer" href='https://www.linkedin.com/in/vikas-raria-978a81146/' target="_blank"><i className="ri-linkedin-line"></i></a></span>
                                    </div>
                                </div>
                            </div>
                        )}

                    {
                        aboutFilter === 'EDUCATION' && <Education />
                    }

                    {
                        aboutFilter === 'SKILLS' && <Skills />
                    }

                    

                    {/* </div> */}
                </Col>
            </Row>
        </Container>
    </section>
}

export default About
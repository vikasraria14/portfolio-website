import React from "react";
import { Container, Row, Col } from "reactstrap";
import './experience.css'

const developementExperienceData =  [ 
    {
        year: ' July, 2021 - Present',
        title: 'Associate Software Engineer - Accenture',
        desc: "In Accenture, I got to work on MERN stack. From this, I got a clear understanding of analyzing business requirement, planning, writing clean code,, code debugging and bug fixing"
    },
    
]

const professionsalProjects=[
    {
        year: ' August, 2021 - Present',
        title:'Project- CMT-Biz-Ops',
        desc: "Added various type of new features according to the Business requirements in the different offerings present in the cost estimator tool of Accenture's internal project called CMT-Biz-Ops. Enhanced the User experience by adding the new offerings and services."
    
    }
]

const Experience = ()=>{
    return(
        <section id="experiences">
            <Container>
                <Row>
                    <Col lg='12' className="mb-5">
                        <h2>Experience</h2>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="single__experience-container">
                            {
                                developementExperienceData.map((item, index) => 
                                <div className="single__experience" key={index}>
                                    <span className="experience__icon"><i className="ri-briefcase-line"></i></span>
                                    <h6>{item.year}</h6>
                                    <h5>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>)
                            }
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="single__experience-container">
                            {
                                professionsalProjects.map((item, index) => 
                                <div className="single__experience" key={index}>
                                    <span className="experience__icon"><i className="ri-briefcase-line"></i></span>
                                    <h6>{item.year}</h6>
                                    <h5>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>)
                            }
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Experience
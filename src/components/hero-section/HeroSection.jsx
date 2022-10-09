import React, {useEffect, useRef} from "react";
import './hero-section.css'

import { init } from "ityped";

import { Container, Row, Col } from "reactstrap";

import heroImg from '../../assets/images/hero-img.png'

const HeroSection = () => {

    const textRef = useRef()
    useEffect(()=>{
        init(textRef.current, {
            backDelay: 1500,
            showCursor: true,
            strings:[
                'Vikas Raria',
                'Software Engineer',
                'Full Stack Developer'
            ]
        })
    },[])

    const contactBtnFunc = (e) => {
        e.preventDefault();
        const targetAttr = e.target.getAttribute("url");
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 70
        });
    };

    return <section className="hero__section" id="home">
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero__content">
                        <p className="mb-3">Welcome to my world!</p>
                        <h2 className="hero__title mb-5">
                            I'm <span ref={textRef}></span>
                        </h2>
                        <p>Motivated software engineer looking to pursue a 
                            successful career in Software development at a 
                            fast paced organization, where I can help in the 
                            delivery of state-of-the-art software solutions. 
                            Experience includes coding, troubleshooting, and 
                            testing for my personal projects. Relevant skills 
                            include C++, Data Structures, HTML5, 
                            CSS3, JavaScript, ReactJs, Redux, NodeJs, Express and MongoDb.</p>
                        
                        <div className="mt-5 hero__btns d-flex align-items-center gap-4">
                            <button className="btn hire__btn">
                                <a href="https://drive.google.com/file/d/1sKf1OErNltsCPjz3JRV9DJR-SL6IIZaJ/view?usp=sharing" target='__blank'>Resume</a>
                            </button>
                            <button className="btn" url="#contact" onClick={contactBtnFunc}>Contact</button>
                        </div>
                    
                    </div>
                </Col>

                <Col lg='6' md='6' className="imgCol">
                    <div className="hero__img">
                        <img  src={heroImg}  alt="" className="imageClass"/>
                    </div>
                </Col>

            </Row>
        </Container>
    </section>
}

export default HeroSection
import React from "react";
import { Container, Row, Col } from "reactstrap";
import './portfolio.css'

import img01 from '../../assets/images/portfolio01.jpg'
import img02 from '../../assets/images/portfolio02.jpg'
import img03 from '../../assets/images/portfolio03.jpg'

const posrtfolioData = [
    {
        imgUrl: img01,
        title: 'Memories',
        url: 'https://delicate-sundae-a3bf98.netlify.app'
    },
    {
        imgUrl: img02,
        title: 'Chat App UI',
        url: 'https://friendly-tiramisu-788716.netlify.app'
    },
    {
        imgUrl: img03,
        title: 'Countries Search',
        url: 'https://astounding-custard-805049.netlify.app/'
    }
]

const Portfolio = () => {
    return(
        <section id="portfolio">
            <Container>
                <Row>
                    <Col lg="12" className="portfolio__top mb-5">
                        <h6>Explore my projects</h6>
                        <h2>My Projects</h2>
                    </Col>

                    
                        {
                            posrtfolioData.map((item,index)=>
                            <Col lg="4" md="6" sm="6" key={index}>
                                <div className="portfolio__card" key={index}>
                                    <div className="protfolio__img">
                                        <img src={item.imgUrl} alt="" className="w-100"></img>
                                    </div>

                                    <div className="portfolio__content">
                                        <h5>{item.title}</h5>
                                        <a rel="noreferrer" href={item.url} target="_blank">View Live</a>
                                    </div>
                                </div>
                            </Col>
                            )
                        }
                </Row>
            </Container>
        </section>
    )
}

export default Portfolio
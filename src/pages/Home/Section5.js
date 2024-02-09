import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row, Carousel } from 'react-bootstrap';
import Brand1 from "../../Web_Assets/assets/technology/dataanalyst.jpg"
import Brand2 from "../../Web_Assets/assets/technology/cybersecurity.jpg"
import Brand3 from "../../Web_Assets/assets/technology/CloudComputing.jpg"
import Brand4 from "../../Web_Assets/assets/technology/Frontend Development.jpg"
import Brand5 from "../../Web_Assets/assets/technology/Backend Development.jpg"
import Brand6 from "../../Web_Assets/assets/technology/Chatbot Development.jpg"
import Brand7 from "../../Web_Assets/assets/technology/Machine Learning.jpg"
import Brand8 from "../../Web_Assets/assets/technology/Mobile App Developmen.jpg"
import Brand9 from "../../Web_Assets/assets/technology/Graphic Desing.jpg"




const mockData = [
    {
        id: "0001",
        image: Brand1,
        title: "Data Analyst",
    },
    {
        id: "0002",
        image: Brand2,
        title: "Cyber Security",
    }, {
        id: "0003",
        image: Brand3,
        title: "Cloud Computing",
    }, {
        id: "0004",
        image: Brand4,
        title: "Frontend Development",
    }, {
        id: "0005",
        image: Brand5,
        title: "Backend Development",
    }, {
        id: "0006",
        image: Brand6,
        title: "Chatbot Development",
    }, {
        id: "0007",
        image: Brand7,
        title: "Machine Learning",
    }, {
        id: "0008",
        image: Brand8,
        title: "Mobile App Development",
    },
    {
        id: "0009",
        image: Brand9,
        title: "Graphic Desing",
    },

]

function Section5() {
    return (
        <section className="job-section recent-jobs-section section-padding mt-5">
            <div className="container">
                <div className="row align-items-center">

                    <Row className="row">
                        <Col lg={12} style={{ textAlign: "center" }}>
                            <h1>Recent Internships</h1>
                            <p style={{
                                fontSize: '145%',
                                padding: '13px 33px',
                                width: '80%',
                                margin: 'auto'
                            }}><strong>Internships came after every two months</strong> Grab your internships on your
                                favourite
                                domain to boost up yourself in the field of Computer technology</p>
                        </Col>
                    </Row>





                    <Row>
                        {mockData.map((a, index) => (
                            <Col sm={12} md={6} lg={4} className="mb-4" style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
                                <Card style={{ width: '22rem' }} className='card' key={index} >
                                    <Card.Img variant="top" src={a.image} />
                                    <Card.Body>
                                        <Card.Title className='cardtitle'>{a.title}</Card.Title>
                                        <Card.Text>
                                            <div class="d-flex align-items-center catalogo"  >
                                                <p class="job-location" >
                                                    <i class="custom-icon bi-geo-alt me-1"></i>
                                                    Remote  &nbsp;
                                                </p>

                                                <p class="job-date" >
                                                    <i class="custom-icon bi-clock me-1" ></i>
                                                    1 Month
                                                </p>
                                            </div>
                                        </Card.Text>
                                        <Button className='catebtn'>Apply Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                        ))
                        }


                    </Row>














                </div>
            </div>
        </section>
    );
}

export default Section5;

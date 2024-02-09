import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import owner from "../../Web_Assets/assets/menu/people-working-as-team-company.jpg"

function Section4() {
    return (

        <section className='section4'>
            <Container className="container">

                <Row className="row">


                    <Col lg={6} md={12}>
                        <div className="custom-text-block4 custom-border-radius-start">
                            <h2 className=" mb-3"> Launching tech careers with internships, exposure, and networking.</h2>
                            <p >Internee.pk kickstart student's tech careers with first internships,
                                providing industry exposure, practical skills, and networking opportunities, paving the
                                way for their success in the tech industry.</p>


                            <Row>

                                <Col>
                                    <div class="counter-thumb">
                                        <div class="d-flex">
                                            <span class="counter-number" data-from="1" data-to="5000"
                                                data-speed="1000">5000</span>
                                            <span class="counter-number-text">+</span>
                                        </div>

                                        <span  class="counter-text">Registered users</span>
                                    </div>
                                </Col>




                                <Col>
                                <div class="counter-thumb">
                                    <div class="d-flex">
                                        <span class="counter-number" data-from="1" data-to="35"
                                            data-speed="1000">35</span>
                                        <span class="counter-number-text">+</span>
                                    </div>

                                    <span  class="counter-text">Opening Internships</span>
                                </div>
                                </Col>

                            </Row>


                        </div>

                    </Col>


                    <Col lg={6} md={12}>
                        <div className="video-thumb">
                            {/* Add your video source or placeholder image here */}
                            <img src={owner} className="about-image custom-border-radius-end img-fluid" alt="" />
                        </div>
                    </Col>


                </Row>

            </Container>

        </section >






    );
};

export default Section4;
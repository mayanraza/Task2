import React from 'react';
import { useState, useEffect } from 'react';
import { Col, Container, Row, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../styles/FooterStyle.css"

function Footer() {

    // scroll State 
    const [isVisible, setIsVisible] = useState(false);
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    const listenToScroll = () => {
        let hieghtHidden = 250;
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

        windowScroll > hieghtHidden ? setIsVisible(true) : setIsVisible(false)


    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll)
    })


    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col sm={6} lg={3} className='mb-4 mv-lg-0'>
                            <div className="text-center">
                                <h5>Location</h5>
                                <p>L-54 Sindh District</p>
                                <p>Karachi 676 Industrial</p>
                                <p>Pakistan</p>
                            </div>
                        </Col>


                        <Col sm={6} lg={3} className='mb-4 mv-lg-0'>
                            <div className="text-center">
                                <h5>Working Hours</h5>

                                <p>Mon-Fri: 9:00AM -  10:00PM</p>
                                <p>Saturday: 10:00AM -  08:00PM</p>
                                <p>Sunday: 12:30PM -  05:00PM</p>
                            </div>
                        </Col>


                        <Col sm={6} lg={3} className='mb-4 mv-lg-0'>
                            <div className="text-center">
                                <h5>Contact Now</h5>
                                <p>Lorem ispum qerty ikjhmo</p>
                                <Link to="tel:111222333" className="calling">111-222-333</Link>
                            </div>
                        </Col>


                        <Col sm={6} lg={3} className='mb-4 mv-lg-0'>
                            <div className="text-center">
                                <h5>Follow Us</h5>
                                <p>Lorem ispum qerty ikjhmo</p>
                                <ul className='list-unstyled tect-center mt-2'>
                                    <li>
                                        <Link to="/"><i className="bi bi-facebook"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><i className="bi bi-twitter"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><i className="bi bi-instagram"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><i className="bi bi-youtube"></i></Link>
                                    </li>
                                </ul>

                            </div>
                        </Col>
                    </Row>


















                    <Row>
                        <Col lg={6} sm={12} className='formh1'>
                            Get Updates About Internships
                        </Col>

                        <Col lg={6} sm={12}>
                            <div className="formbox">
                                <i class="bi bi-person user"></i>

                                <input type="email" placeholder="@internee.pk.outlook" />
                                <span className="sendicon">
                                    <i class="bi bi-send"></i>
                                </span>
                            </div>
                        </Col>
                    </Row>































                    <Row className='copy_right'>
                        <Col>
                            <div>
                                <ul className="list-unstyled text-center mb-0">
                                    <li>
                                        <Link to="/"><span>Copyright © Internee.pk 2024</span>. All Rights Reserved</Link>
                                    </li>

                                    <li>
                                        <Link to="/">About Us</Link>
                                    </li>

                                    <li>
                                        <Link to="/">Terms Of Use</Link>
                                    </li>

                                    <li>
                                        <Link to="/">Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </footer>









            {/* scroll top */}

            {isVisible && (

                <div className="scroll_top" onClick={scrollTop}>
                    <i className="bi bi-arrow-up"></i>
                </div>


            )}



        </>
    );
}

export default Footer;
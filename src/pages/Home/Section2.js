import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import founder1 from "../../Web_Assets/assets/about/founder.jpg"
import founder2 from "../../Web_Assets/assets/about/rayyan.jpg"





function Section2() {
    return (
        <section>
            <Container>

                <Row className='aboutrow'>








                    <Col lg={3} md={12}>

                        <img src={founder1} className="about-image custom-border-radius-start img-fluid" alt="" />


                        <div className="about-info1">
                            <h4 >Hammad Sheikh</h4>
                            <p >Founder</p>
                        </div>

                    </Col>



                    <Col lg={6} md={12}>
                        <div className="custom-text-block1">
                            <h2 className=" mb-2">Welcome to Internee.pk</h2>
                            <p className="">
                                Our internship program is designed to give students the opportunity to work on meaningful projects and tasks, while also receiving mentorship and guidance from experienced professionals in the field. Our goal is to help interns develop the skills and knowledge they need to succeed in their careers, while also building a strong network of talented individuals who may become valuable members of our team in the future. If you're looking for a challenging and rewarding internship experience, we invite you to explore our program and{' '}
                                <a href="/job-listings.html"  target="_parent">
                                    Apply Today
                                </a>
                            </p>

                            <div className="custom-border-btn-wrap d-flex align-items-center mt-5 aboutbtn" >
                                <a href="about.html" className="custom-btn custom-border-btn btn me-4">Get to know us</a>
                                <a href="job-listings.html" className="custom-link smoothscroll">Explore Internships</a>
                            </div>
                        </div>

                    </Col>




                    <Col lg={3} md={12}>
                        <img src={founder2} className="about-image custom-border-radius-end img-fluid" alt="" />
                        <div className="about-info2">
                            <h4 >Rayyan Zain</h4>
                            <p >CMO</p>
                        </div>
                    </Col>






                </Row>
            </Container>

        </section>









        // <section className="about-section">
        //     <div className="container">
        //         <div className="row">

        //             <div className="col-lg-3 col-12">
        //                 <div className="about-image-wrap custom-border-radius-start">
        //                     <img src={founder1} className="about-image custom-border-radius-start img-fluid" alt="" />

        //                     <div className="about-info">
        //                         <h4 className="text-white mb-0 me-2">Hammad Sheikh</h4>
        //                         <p className="text-white mb-0">Founder</p>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="col-lg-6 col-12">
        // <div className="custom-text-block">
        //     <h2 className="text-white mb-2">Welcome to Internee.pk</h2>
        //     <p className="text-white">
        //         Our internship program is designed to give students the opportunity to work on meaningful projects and tasks, while also receiving mentorship and guidance from experienced professionals in the field. Our goal is to help interns develop the skills and knowledge they need to succeed in their careers, while also building a strong network of talented individuals who may become valuable members of our team in the future. If you're looking for a challenging and rewarding internship experience, we invite you to explore our program and{' '}
        //         <a href="/job-listings.html" style={{ color: '#30e792', fontWeight: 'bolder' }} target="_parent">
        //             Apply Today
        //         </a>
        //     </p>

        //     <div className="custom-border-btn-wrap d-flex align-items-center mt-5">
        //         <a href="about.html" className="custom-btn custom-border-btn btn me-4">Get to know us</a>
        //         <a href="job-listings.html" className="custom-link smoothscroll">Explore Internships</a>
        //     </div>
        // </div>
        //             </div>

        //             <div className="col-lg-3 col-12">
        //                 <div className="instagram-block">
        //                     <img src={founder2} className="about-image custom-border-radius-end img-fluid" alt="" />
        //                     <div className="about-info">
        //                         <h4 className="text-white mb-0 me-2">Rayyan Zain</h4>
        //                         <p className="text-white mb-0">CMO</p>
        //                     </div>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
        // </section>


    );
}

export default Section2;
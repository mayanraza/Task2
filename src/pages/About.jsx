import React from 'react'
import Layout from "../component/Layouts/Layout";
import "../styles/About.css"
import logo1 from "../Web_Assets/assets/about/Dialogflow.png"
import logo2 from "../Web_Assets/assets/about/alexa.png"
import logo3 from "../Web_Assets/assets/about/rasa.png"














const About = () => {
    return (
        <>

            <Layout>



                <section className="job-section job-featured-section section-padding" >
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 col-12 text-center mx-auto mb-4">
                                <h2>Featured Internships</h2>
                                <p>Grab your <strong>internships</strong> on your favourite domain now..!</p>
                            </div>

                            <div className="col-lg-12 col-12">
                                {/* Featured Internship 1 */}
                                <div className="job-thumb d-flex">
                                    <div className="job-image-wrap">
                                        <img src={logo1} className="job-image img-fluid" alt="" />
                                    </div>

                                    <div className="job-body d-flex flex-wrap flex-auto align-items-center ms-4">
                                        <div className="mb-3">
                                            <h4 className="job-title mb-lg-0">
                                                <a href="https://forms.gle/DhTSpwrmeFLg8vQx8" className="job-title-link">Dialogflow Internship</a>
                                            </h4>

                                            <div className="d-flex flex-wrap align-items-center">
                                                <p className="job-location mb-0">
                                                    <i className="custom-icon bi-geo-alt me-1"></i>
                                                    Karachi, Pakistan
                                                </p>

                                                <p className="job-date mb-0">
                                                    <i className="custom-icon bi-clock me-1"></i>
                                                    1 Month
                                                </p>

                                                <div className="d-flex">
                                                    <p className="mb-0">
                                                        <a className="badge badge-level">Internship</a>
                                                    </p>

                                                    <p className="mb-0">
                                                        <a className="badge">Remote</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="job-section-btn-wrap">
                                            <a href="https://forms.gle/DhTSpwrmeFLg8vQx8" className="custom-btn btn">Apply now</a>
                                        </div>
                                    </div>
                                </div>
                                {/* End Featured Internship 1 */}




















                                <div className="job-thumb d-flex">
                                <div className="job-image-wrap">
                                    <img src={logo2} className="job-image img-fluid" alt="" />
                                </div>

                                <div className="job-body d-flex flex-wrap flex-auto align-items-center ms-4">
                                    <div className="mb-3">
                                        <h4 className="job-title mb-lg-0">
                                            <a href="https://forms.gle/DhTSpwrmeFLg8vQx8" className="job-title-link">Alexa Skill Internship</a>
                                        </h4>

                                        <div className="d-flex flex-wrap align-items-center">
                                            <p className="job-location mb-0">
                                                <i className="custom-icon bi-geo-alt me-1"></i>
                                                Karachi, Pakistan
                                            </p>

                                            <p className="job-date mb-0">
                                                <i className="custom-icon bi-clock me-1"></i>
                                                1 Month
                                            </p>

                                            <div className="d-flex">
                                                <p className="mb-0">
                                                    <a className="badge badge-level">Internship</a>
                                                </p>

                                                <p className="mb-0">
                                                    <a className="badge">Remote</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="job-section-btn-wrap">
                                        <a href="https://forms.gle/DhTSpwrmeFLg8vQx8" className="custom-btn btn">Apply now</a>
                                    </div>
                                </div>
                            </div>






















                            <div className="job-thumb d-flex">
                            <div className="job-image-wrap">
                                <img src={logo3} className="job-image img-fluid" alt="" />
                            </div>

                            <div className="job-body d-flex flex-wrap flex-auto align-items-center ms-4">
                                <div className="mb-3">
                                    <h4 className="job-title mb-lg-0">
                                        <a href="https://forms.gle/DhTSpwrmeFLg8vQx8" className="job-title-link">RASA Internship</a>
                                    </h4>

                                    <div className="d-flex flex-wrap align-items-center">
                                        <p className="job-location mb-0">
                                            <i className="custom-icon bi-geo-alt me-1"></i>
                                            Karachi, Pakistan
                                        </p>

                                        <p className="job-date mb-0">
                                            <i className="custom-icon bi-clock me-1"></i>
                                            1 Month
                                        </p>

                                        <div className="d-flex">
                                            <p className="mb-0">
                                                <a className="badge badge-level">Internship</a>
                                            </p>

                                            <p className="mb-0">
                                                <a className="badge">Remote</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="job-section-btn-wrap">
                                    <a href="https://forms.gle/DhTSpwrmeFLg8vQx8" className="custom-btn btn">Apply now</a>
                                </div>
                            </div>
                        </div>

















                                {/* Repeat the above structure for other featured internships */}

                            </div>

                        </div>
                    </div>
                </section>


















            </Layout>








        </>
    )
}

export default About

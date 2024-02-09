import React from 'react'
import Layout from '../component/Layouts/Layout'
import "../styles/Contact.css"

import { useFormik } from 'formik';
import * as Yup from 'yup';




const validationSchema = Yup.object({
    fullName: Yup.string().matches(/^[a-zA-Z]{5,}$/, 'Name must contain at least 5 alphabets').required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
});

















const Contact = () => {







    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // Handle form submission here
            console.log(values);
        },
    });


















    return (
        <Layout>

            <section className="hero-section1 d-flex justify-content-center align-items-center">
                <div className="section-overlay"></div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12 mb-5 mb-lg-0">
                            <div className="hero-section-text mt-5">
                                <h1 className="text-white internh1">
                                    Get in touch
                                </h1>



                                <a
                                    href="/job-listings.html"
                                    id="styling"
                                    className="custom-btn  btn styling internbtn"
                                >
                                    contact us..!!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>














            <section className="contact-section section-padding" >
                <div className="container">
                    <div className="row justify-content-center" >

                        <div className="col-lg-6 col-12 mb-lg-5 mb-3" >
                            <iframe
                                className="google-map"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14468.480271972865!2d66.9630595!3d24.962029249999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1684627801858!5m2!1sen!2s"
                                width="100%"
                                height="350"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div className="col-lg-5 col-12 mb-3 mx-auto">
                            <div className="contact-info-wrap" >
                                <div className="contact-info d-flex align-items-center mb-3">
                                    <i className="custom-icon bi-building" ></i>

                                    <p className="mb-0" >
                                        <span className="contact-info-small-title" >Office</span>
                                        National Incubation Center, Karachi, Pakistan
                                    </p>
                                </div>







                                <div className="contact-info d-flex align-items-center">
                                    <i className="custom-icon bi-linkedin"></i>
                                    <p className="mb-0">
                                        <span className="contact-info-small-title">Linkedin</span>
                                        <a href="https://www.linkedin.com/in/internee-pk-1ba44a276/" className="site-footer-link">
                                            internee-pk
                                        </a>
                                    </p>
                                </div>








                                <div className="contact-info d-flex align-items-center">
                                    <i class="custom-icon bi bi-phone-fill"></i>
                                    <p className="mb-0">
                                        <span className="contact-info-small-title">Phone</span>
                                        <a href="https://api.whatsapp.com/send/?phone=%2B923453191638&text&app_absent=0" className="site-footer-link">
                                            +92 345 3191638 <br /> +92 349 2861021
                                        </a>
                                    </p>
                                </div>











                                <div className="contact-info d-flex align-items-center">
                                    <i class="custom-icon bi bi-envelope-at-fill"></i>
                                    <p className="mb-0">
                                        <span className="contact-info-small-title">Email</span>
                                        <a href="mailto:info@internee.pk" className="site-footer-link">
                                            info@internee.pk
                                        </a>
                                    </p>
                                </div>



                            </div>
                        </div>














                        <div className="col-lg-8 col-12 mx-auto" >







                            <form className="custom-form contact-form" onSubmit={formik.handleSubmit}>
                                <h1 className="text-center mb-4">Project in mind? Let’s Talk</h1>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <label htmlFor="fullName">Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            id="fullName"
                                            className={`form-control ${formik.touched.fullName && formik.errors.fullName ? 'is-invalid' : ''}`}
                                            placeholder="Hammad Sheikh"
                                            required=""
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            value={formik.values.fullName}
                                        />
                                        {formik.touched.fullName && formik.errors.fullName ? (
                                            <div className="invalid-feedback">{formik.errors.fullName}</div>
                                        ) : null}
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            pattern="[^ @]*@[^ @]*"
                                            className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                                            placeholder="hammadsheikh@gmail.com"
                                            required=""
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                        />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className="invalid-feedback">{formik.errors.email}</div>
                                        ) : null}
                                    </div>

                                    <div className="col-lg-12 col-12">
                                        <label className="textarealable" htmlFor="message">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            rows="6"
                                            className={`form-control ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''}`}
                                            id="message"
                                            placeholder="What can we help you?"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            value={formik.values.message}
                                        ></textarea>
                                        {formik.touched.message && formik.errors.message ? (
                                            <div className="invalid-feedback2">{formik.errors.message}</div>
                                        ) : null}
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-6 mx-auto">
                                        <button type="submit" className="form-control">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>











                        </div>

                    </div>
                </div>
            </section>


























        </Layout>
    )
}

export default Contact

import React from 'react'
import Section5 from './Home/Section5'
import Layout from '../component/Layouts/Layout'
import "../styles/Internship.css"
import img1 from "../Web_Assets/assets/about/modern-office-space-with-desktops-with-modern-computers-created-with-generative-ai-technology (1).jpg"

const Internship = () => {
  return (
   <Layout>
   
   <section className="hero-section1 d-flex justify-content-center align-items-center">
      <div className="section-overlay"></div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 mb-5 mb-lg-0">
            <div className="hero-section-text mt-5">
              <h1 className="text-white internh1">
              Internships Listings
              </h1>

             

              <a
                href="/job-listings.html"
                id="styling"
                className="custom-btn  btn styling internbtn"
              >
                Browse Internships
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

   <Section5/>
   
   
   
   
   </Layout>
  )
}

export default Internship

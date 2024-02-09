import React from 'react';













function Section3() {
    return (



        <section className="categories-section section-padding" style={{marginTop:"60px"}} id="categories-section">
        <div className="container">
          <div className="row justify-content-center align-items-center">
  
            <div className="col-lg-12 col-12 text-center">
              <h1 className="mb-5">Browse by <span>Categories</span></h1>
            </div>
  
            <div className="col-lg-2 col-md-4 col-6">
              <div className="categories-block">
                <a href="web-design.html" className="d-flex flex-column justify-content-center align-items-center h-100">
                  <i className="categories-icon bi-window"></i>
                  <small className="categories-block-title">Website Designing </small>
                  <div className="categories-block-number d-flex flex-column justify-content-center align-items-center">
                    <span className="categories-block-number-text">05</span>
                  </div>
                </a>
              </div>
            </div>
  
            <div className="col-lg-2 col-md-4 col-6">
              <div className="categories-block">
                <a href="web-development.html" className="d-flex flex-column justify-content-center align-items-center h-100">
                  <i className="categories-icon bi-globe"></i>
                  <small href="listing.html" className="categories-block-title"> Web Development </small>
                  <div className="categories-block-number d-flex flex-column justify-content-center align-items-center">
                    <span className="categories-block-number-text">05</span>
                  </div>
                </a>
              </div>
            </div>
  
            <div className="col-lg-2 col-md-4 col-6">
              <div className="categories-block">
                <a href="chatbot.html" className="d-flex flex-column justify-content-center align-items-center h-100">
                  <i className="categories-icon bi-robot"></i>
                  <small className="categories-block-title">CRM's & Chatbot Development</small>
                  <div className="categories-block-number d-flex flex-column justify-content-center align-items-center">
                    <span className="categories-block-number-text">04</span>
                  </div>
                </a>
              </div>
            </div>
  
            <div className="col-lg-2 col-md-4 col-6">
              <div className="categories-block">
                <a href="graphic.html" className="d-flex flex-column justify-content-center align-items-center h-100">
                  <i className="categories-icon bi-vector-pen"></i>
                  <small className="categories-block-title">Graphic Designing & 3D Modeling</small>
                  <div className="categories-block-number d-flex flex-column justify-content-center align-items-center">
                    <span className="categories-block-number-text">05</span>
                  </div>
                </a>
              </div>
            </div>
  
            <div className="col-lg-2 col-md-4 col-6">
              <div className="categories-block">
                <a href="mobile-development.html" className="d-flex flex-column justify-content-center align-items-center h-100">
                  <i className="categories-icon bi-phone"></i>
                  <small className="categories-block-title">Mobile Application Development</small>
                  <div className="categories-block-number d-flex flex-column justify-content-center align-items-center">
                    <span className="categories-block-number-text">06</span>
                  </div>
                </a>
              </div>
            </div>
  
          </div>
        </div>
      </section>


    );
}

export default Section3;
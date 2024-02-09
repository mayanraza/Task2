import React from "react";

function Section1() {
  return (
    <section className="hero-section d-flex justify-content-center align-items-center">
      <div className="section-overlay"></div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-5 mb-lg-0">
            <div className="hero-section-text mt-5">
              <h6 className="text-white">
                Are you looking for your dream Internship?
              </h6>

              <h1 className="hero-title text-white mt-4 mb-4">
                Join <br /> Internee.pk now..!
              </h1>

              <p style={{ color: "white" }}>
                Pakistan's Virtual Internship Platform Powered By{" "}
                <a
                  href="https://techviochats.com/"
                  style={{ fontWeight: "bold", color: "rgb(208, 228, 255)" }}
                >
                  TechvioChats
                </a>
              </p>

              <a
                href="/job-listings.html"
                id="styling"
                className="custom-btn  btn styling"
              >
                Browse Internships
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;

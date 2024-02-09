import React from "react";
import "../../styles/HeaderStyle.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../Web_Assets/assets/logo/hlogo.png";
import { useState } from "react";

function Header() {
  const [nav, setNav] = useState(false);

  //  scroll navbar

  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Row className="hrow">
              <Col style={{ marginRight: "-18px" }}>
                <Link to="/" className="logo">
                  <img src={Logo} alt='"logo' className="img-fluid" />
                </Link>
              </Col>
              <Col style={{ marginRight: "21px", paddingLeft: "0px" }}>
                <Row style={{ marginTop: "10px" }}>
                  <strong class="logo-text">
                    Internee<span style={{ color: "black" }}>.pk</span>
                  </strong>
                </Row>
                <Row>
                  <small className="logo-slogan">
                    Virtual Internship PLATFORM
                  </small>
                </Row>
              </Col>
            </Row>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/about"}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to={"/internship"}>
                Internship
              </Nav.Link>
              <Nav.Link as={Link} to={"/contact"}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to={"/"}>
                LMS NEWS
              </Nav.Link>
              <Nav.Link as={Link} to={"/"}>
                Job Portal
              </Nav.Link>
              <Nav.Link as={Link} to={"/"}>
                <div className="cart">
                  <button className="hbutton">
                    <i class="bi bi-person"></i>
                    Internee Portal
                  </button>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

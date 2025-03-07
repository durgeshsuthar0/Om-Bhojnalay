import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.JPG";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white pt-4 pb-3 mt-5">
      <Container>
        <div className="d-flex justify-content-center mb-2">
          <img src={logo} alt="Hotel Logo" width="120" />
        </div>
        <Row className="text-center text-md-left">
          {/* Address Section */}
          <Col md={4} xs={12} className="mb-3">
            <h5>Hotel Address</h5>
            <p>
              G-15, Ricco Indstrial Area
              <br />
              Sarupganj, Dist-Sirohi
              <br />
              (Raj.) 307023
            </p>
          </Col>

          {/* Contact Section */}
          <Col md={4} xs={12} className="mb-3">
            <h5>Contact Us</h5>
            <p>
              Phone: 9828052445
              <br />
              Phone: 9828687071
            </p>
          </Col>

          {/* Social Media Links */}
          <Col md={4} xs={12} className="mb-3">
            <h5>Follow Us</h5>
            <div>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mr-3"
              >
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <br />
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mr-3"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <br />
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mr-3"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          {/* Copyright Section */}
          <Col className="text-center mt-4">
            <p>&copy; 2025 Om Bhojnalay All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

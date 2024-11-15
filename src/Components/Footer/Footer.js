import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../Assets/logo.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaRegUser, FaBook, FaBriefcase, FaHome, FaGlobe, FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa';
import './Footer.css'; // Import the custom CSS file

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show or hide the scroll-to-top icon based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="footer">
      <Container className="footer-container">
        <Row>
          <Col md={4} className="footer-section">
            <img
              src={logo}
              alt="NIC Immigration Services"
              className="footer-logo"
            />
            <p className="footer-text">
              NIC Immigration Services (NICIS) is an international migration and consultation services firm.
              We offer services for skilled migration, Business, Student, and Family VISAs. Our head office is in Sydney, Australia.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </Col>

          <Col md={2} className="footer-section">
            <h5>Visa Types</h5>
            <ul className="footer-list">
              <li className="footer-list-item"><FaRegUser className="icon" /> Skilled Migration VISA</li>
              <li className="footer-list-item"><FaBook className="icon" /> Student VISA</li>
              <li className="footer-list-item"><FaBriefcase className="icon" /> Business VISA</li>
              <li className="footer-list-item"><FaHome className="icon" /> Family VISA</li>
            </ul>
          </Col>

          <Col md={2} className="footer-section">
            <h5>Quick Links</h5>
            <ul className="footer-list">
              <li className="footer-list-item"><FaBook className="icon" /> Prepare high-quality applications</li>
              <li className="footer-list-item"><FaBook className="icon" /> Prepare right supporting document</li>
              <li className="footer-list-item"><FaBook className="icon" /> Get the right knowledge and VISA processing requirement</li>
            </ul>
          </Col>

          <Col md={4} className="footer-section footer-contact">
            <h5>Contact</h5>
            <p><FaGlobe className="icon" /> NIC Immigration Services P.O. Box 653, Girraween, NSW 2146, Australia.</p>
            <p><FaEnvelope className="icon" /> Send your mail to: <a href="mailto:nicvenkat@yahoo.com">nicvenkat@yahoo.com</a></p>
            <p><FaPhone className="icon" /> Phone: +61-423445159</p>
          </Col>
        </Row>
      </Container>

      {/* Scroll to Top Arrow */}
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}

      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} NIC Immigration Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

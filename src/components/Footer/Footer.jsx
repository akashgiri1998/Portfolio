import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <span>Dedicated to creating Software and Mobile Applications</span>
        </Col>
        <Col md="4" className="footer-copywright">
          <span>Copyright © {year}</span>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/akashgiri1998"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github">
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/akash-giri-449597184/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.hackerrank.com/profile/akashgirigiri2"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="hackerrank">
                <SiHackerrank />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

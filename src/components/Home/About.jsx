import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="yellow">Introduction</span>             </h1>
            <p className="home-about-body">
              Hi, I am <span className="yellow"> Akash Giri </span>
              and I'm originally from <span className="yellow"> Nepal and Currently in Toronto, Ontario</span>
              <br />
              <br />
              I graduated with a Bachelor's degree in Computer Engineering in
              2020 and currently pursuing Ontario Graduate Certificate in
              Computer Software and Database Development.
              <br />
              As a
              <b className="yellow">
                {" "}
                Software developer with professional experience of more than 3
                years in Mobile Application Development based on React Native{" "}
              </b>
              , I enjoy tackling new challenges and continuously expanding my
              skillset.
              <br />
              <br />I am proficient in
              <b className="yellow"> Javascript and TypeScript </b>
              as well as have knowledge in programming languages such as C, C++
              Java, Python,
              <b className="yellow"> GraphQL,etc.</b>
              <br />
              <br />I have a passion working with{" "}
              <b className="yellow">
                Node.js, MongoDB, PostgreSQL, Express.js
              </b>{" "}
              and
              <i>
                <b className="yellow">
                  {" "}
                  modern Javascript libraries and frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="yellow"> React.js</b>
              </i>
              <br />
              <br />I am also interested in learning and developing new
              <i>
                <b className="yellow"> Web Technologies and Products </b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;

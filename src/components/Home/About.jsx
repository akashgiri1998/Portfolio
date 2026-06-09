import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <Container fluid className="home-about-section">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span >Introduction</span>             </h1>
            <p className="home-about-body">
              Hi, I am Akash Giri
              <br />
              <br />
              I graduated with a Bachelor's degree in Computer Engineering in
              October, 2020 and also completed Ontario Graduate Certificate in
              Computer Software and Database Development in August, 2024
              <br/>
              <br />
              As a
                {" "}
                Software developer with professional experience of almost 4
                years in Front-end based on React and Mobile Application Development based on React Native{" "}
              , I enjoy tackling new challenges and continuously expanding my skillset
              skillset.
              <br />
              <br />I am proficient in
              Javascript and TypeScript
              as well as have knowledge in programming languages such as C++,
              Java, Python,
              GraphQL,etc.
              <br />
              <br />I have a passion working with{" "}
                Node.js, MongoDB, PostgreSQL, Express.js
              {" "}
              and
              <i>
                  {" "}
                  modern Javascript libraries and frameworks
              </i>
              &nbsp; like
              <i>
                 React.js
              </i>
              <br />
              <br />In today's fast-paced technology landscape, AI has become an essential tool for accelerating development. 
              <i>
                  {" "}So, I actively utilize AI platforms such as Claude and Antigravity 2.0 to prototype ideas, optimize workflows and build applications more efficiently while maintaining code quality and best practices.
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

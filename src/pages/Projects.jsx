import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import canteen from "../assets/projects/canteen.jpg";
import meroyatra from "../assets/projects/meroyatra.jpg";
import motorbazar from "../assets/projects/motorbazar.jpg";
import vinhood from "../assets/projects/vinhood.png"
import triplocator from "../assets/projects/triplocator.png"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some of my Projects
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects that I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vinhood}
              isBlog={false}
              title="Vinhood"
              description="Vinhood is a wine recommendation platform that shows the wine for customer’s based on their taste. This is my work project at Touchware IT Service Pvt. Ltd.(Kotuko), later continued involving at Vinhood Company. At Vinhood we have been working for years to guide people through a more targeted and informed choice of the products they love. Find content , experiences , games , quizzes and daily and personalized tips , to enjoy your favorite products even better. Technologies used are React Native, Redux, Storybook, Javascript, Typescript, git, JIRA,API's,etc"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={triplocator}
              isBlog={false}
              title="Triplocator"
              description="Created a ReactJS-based admin interface for the website and transitioned an
              existing React web app of TripLocator which is an online travel company which specializes in providing travel services to destinations around the globe to React Native, meeting project
              requirements and enhancing the platform's administrative capabilities. This is my professional project developed at Softhover. Technologies used are React, React Native, HTML, CSS, JavaScript, Redux, Api's, etc."
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meroyatra}
              isBlog={false}
              title="Mero Yatra"
              description="This is the website developed using Django framework based on python and machine learning, a travel website with recommendation system. Developed as a semester project in university as required by the cirriculum. Technologies used are python, HTML, CSS and django framework."
              ghLink="https://github.com/akashgiri1998/__Meroyatra__"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={motorbazar}
              isBlog={false}
              title="Motor Bazar"
              description="Motor Bazar is a ecommerce website developed to buy and sell old vehicles. Developed as a semester project in university. Technologies used are C# and .Net framework."
              ghLink="https://github.com/akashgiri1998/__Motorbazar__"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={canteen}
              isBlog={false}
              title="KU Canteen Management System"
              description="KU Canteen Management System is a desktop application developed using Python(PyQt5) replacing the traditional coupon system for buying foods into technical. Developed as a semester project in university"
              ghLink="https://github.com/akashgiri1998/canteen-mngmt-sys"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import canteen from "../assets/projects/canteen.jpg";
import meroyatra from "../assets/projects/meroyatra.jpg";
import motorbazar from "../assets/projects/motorbazar.jpg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some of my<strong className="yellow"> Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects that I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meroyatra}
              isBlog={false}
              title="Mero Yatra"
              description="This is the website developed using Django framework based on python, a travel website with recommendation system."
              ghLink="https://github.com/akashgiri1998/__Meroyatra__"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={motorbazar}
              isBlog={false}
              title="Motor Bazar"
              description="Motor Bazar is a ecommerce website developed to buy and sell old vehicles"
              ghLink="https://github.com/akashgiri1998/__Motorbazar__"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={canteen}
              isBlog={false}
              title="KU Canteen Management System"
              description="KU Canteen Management System is a desktop application developed using Python(PyQt5) replacing the traditional coupon system for buying foods into technical"
              ghLink="https://github.com/akashgiri1998/canteen-mngmt-sys"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;

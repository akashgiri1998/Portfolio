import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle'
import Techstack from "../components/Skillset/TechStack";
import Toolstack from "../components/Skillset/ToolStack"
import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional Skillset
        </h1>

        <Techstack />

        <h1 className="project-heading">
          Tools I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  )
}

export default Skillset
import React from "react";
import { Card, Container } from "react-bootstrap";
import Particle from "../components/Particle";

export default function Certifications() {
  return (
    <div style={{
  flex: 1
}}>
    <Container style={{paddingBottom: '750px',paddingTop:"100px"}}>
        <Particle />
<h2 style={{ marginBottom: "30px",color:'white' }}>My Certifications</h2>

      <Card style={{ padding: "20px", borderRadius: "10px" }}>
        <h4>Microsoft Certified: Azure AI Fundamentals(AZ-900)</h4>
        <p><b>Issuer:</b> Microsoft</p>
        <p><b>Date:</b> March 26, 2026</p>
        <p>
          Issued by Microsoft. This certification validates foundational knowledge of AI concepts and Azure AI services.
        </p>

        <a
          href="https://learn.microsoft.com/en-gb/users/akashgiri-6012/credentials/4eeb015b4bdc6171?ref=https%3A%2F%2Fwww.linkedin.com%2F"
          target="_blank"
          rel="noreferrer"
        >
          View Certification
        </a>
      </Card>    </Container>
    </div>
  );
}
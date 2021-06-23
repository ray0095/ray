import React from "react";
import Container from "../components/Container";
import Carousel from "../components/Carousel";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>

      <Container>
        <Row>
          <Col size="md-4">
            <div>
              <h1>Place profile photos here!</h1>
            </div>
          </Col>
          <Col size="md-4">
            <h1>Welcome To Pupster!</h1>
          </Col>
          <Col size="md-4">
            <Carousel>
              <h1>My Work</h1>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;

import React from "react";
import Carousel from "../components/Carousel";
import BioPic from "../components/BioPics";
import Row from "../components/Row";
import Col from "../components/Col";
import "./style.css";

function About() {
  return (
    <div>

    
        <Row>
          <Col size="md-4">
            <div>
              <BioPic></BioPic>
            </div>
          </Col>
          <Col size="md-4">
            <h1>Rachel Strong the Developer</h1>
            <p>I'm a Brooklyn-based developer who has a passion for design. I have significant experience in non-technical customer-facing roles in the Cloud computing space so not only can I build you a beautiful application, I can understand and incorporate your business needs. I have experience working with HTML, CSS, Javascript, Node.js, Express.js, MySQL, MongoDB, React, and Github workflows. I have a passion for collaboration and need for excellence. While I consider myself a professional, I see no reason why we can't do incredible work and have fun while doing it.</p>
            <p>Outside of work I am an avid cook, bike rider, and whiskey connoisseur. Connect with me on Linkedin!</p>
            <Col>
              <a href="https://github.com/ray0095">
              <i class="fab fa-github fa-3x"></i>
              </a>
              <a href="https://www.linkedin.com/in/rachel-strong-54276a142/">
              <i class="fab fa-linkedin fa-3x"></i>
              </a>
              <a href="mailto::rachelstrongstorage@gmail.com">
              <i class="fas fa-paper-plane fa-3x"></i>
              </a>
            </Col>
          </Col>
          <Col size="md-4">
            <Carousel>
              <h1>My Work</h1>
            </Carousel>
          </Col>
        </Row>
     
    </div>
  );
}

export default About;

import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="advertising-image.jpg">
        <h1>TALBOT DRAKE INC.</h1>
      </Hero>
      <Container style={{ marginTop: 30}}>
        {/* <Row> */}
          <Col size="md-12">
            <h1>A Retail Advertising and Marketing Company</h1>
            <h3>Creative, Photography, Print and Web</h3>
          </Col>
        {/* </Row> */}

      </Container>
    </div>
  );
}

export default About;

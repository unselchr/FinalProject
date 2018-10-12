import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import "./NoMatch.css";

const NoMatch = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h3>404 Page Not Found</h3>
          <h1>
              <img class="NMimg" src="http://img2.wikia.nocookie.net/__cb20120423083444/40k/images/d/d0/Ork_icon.png"/>
          </h1>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default NoMatch;

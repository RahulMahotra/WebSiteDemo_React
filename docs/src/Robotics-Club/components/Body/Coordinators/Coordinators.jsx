import React from "react";
import Styles from "./corrdinators.module.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function Coordinators() {
  return (
    <section>
      <Container>
        <h1 className={Styles.head}>Our Coordinators</h1>

        <Container className={Styles.innerCont}>
          <Row>
            <Col xl="6" className={Styles.coordinatorbackground}>
              Your Name
            </Col>
            <Col>My Name</Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Coordinators;

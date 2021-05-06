import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Styles from "./about.module.css";
import Aboutimg from "../images/cyborg-1.png";

function About() {
  return (
    <section>
      <Container className={Styles.aboutCont}>
        <h1 className={Styles.aboutHead}>About Us</h1>
        <Row>
          <Col xl="6">
            <img src={Aboutimg} alt="Aboutimg" className={Styles.aboutimg} />
          </Col>
          <Col>
            <p className={Styles.aboutcontent}>
              What if you could build a R2D2? How about Transformers? Or a
              WALL-E?
              <br />
              <br /> If you have ever even secretly aspired to build your own
              robot, then the Robotics Club, IIITG is the place for you! We are
              a diverse group of over-enthused robotics nerds who find roots
              across all academic departments of the institute as well as
              ‘seniority’. The club is a student body which finds its place
              under the Science and Technology Council, Student Gymkhana, IIIT
              Guwahati. Interested in what kind of work we do? We build robots
              for academic purposes, to compete at both national and
              international events or just out of plain interest. Check out our
              project page and achievements. Having those newbie jitters? No
              worry. We are here to induct you into the rapidly expanding world
              of robotics. One on one guidance, workshops and tutorials along
              with tools, equipments, components and workspace eagerly await
              you!
              <br />
              <br />
              #HappyRoboting
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;

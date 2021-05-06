import React from "react";
import {
  Container,
  Form,
  Button,
  Col,
  Card,
  Row,
  FormControl
} from "react-bootstrap";
import Styles from "./contact.module.css";
import { FaEnvelope, FaTelegram } from "react-icons/fa";
import Contactimg from "../images/contact.png";

function Contact() {
  return (
    <section>
      <Container className={Styles.outercont}>
        <h1 className={Styles.mainhead}>Contact Us</h1>
        <Row>
          <Col lg="6">
            <Card className={Styles.contactcont}>
              <h2 className={Styles.contactheading}>
                <FaEnvelope /> Write To Us:
              </h2>
              <Form>
                <Form.Row>
                  <Form.Group controlId="formBasicText" as={Col} md="6">
                    <Form.Control
                      type="text"
                      placeholder="Your name"
                      className={`${Styles.formgroup} ${Styles.input}`}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail" as={Col} md="6">
                    <Form.Control
                      type="email"
                      placeholder="Your email"
                      className={`${Styles.formgroup} ${Styles.input}`}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicNumber" as={Col} md="6">
                    <Form.Control
                      type="integer"
                      maxLength="10"
                      placeholder="Your phone"
                      className={`${Styles.formgroup} ${Styles.input}`}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicText" as={Col} md="6">
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      className={`${Styles.formgroup} ${Styles.input}`}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicText" as={Col}>
                    <FormControl
                      as="textarea"
                      aria-label="With textarea"
                      placeholder="Message"
                      className={`${Styles.formgroup} ${Styles.input}`}
                    />
                  </Form.Group>
                </Form.Row>
                <FaTelegram className={Styles.telegram} />
              </Form>
            </Card>
          </Col>
          <Col lg="6">
            <img src={Contactimg} alt=" " className={Styles.contactimg} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;

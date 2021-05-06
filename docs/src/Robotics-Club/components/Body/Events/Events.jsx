import React from "react";
import Styles from "./events.module.css";
import { Container, CardDeck, Card, Row, Col } from "react-bootstrap";
import CardImg from "../images/cardimage.jpg";
// import Cardbody from "../images/cardbody.png";

function Events() {
  return (
    <section>
      <Container>
        <h1 className={Styles.heading}>Events</h1>
        <Container className={Styles.carddeck}>
          <CardDeck>
            <Card className={`${Styles.cardbodyimg} ${Styles.card}`}>
              <Card.Img variant="top" src={CardImg} />

              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className={Styles.card}>
              <Card.Img variant="top" src={CardImg} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className={Styles.card}>
              <Card.Img variant="top" src={CardImg} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </Container>
    </section>
  );
}

export default Events;

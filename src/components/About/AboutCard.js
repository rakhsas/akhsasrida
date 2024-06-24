import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="green">Akhsas rida </span>
            from <span className="green"> Casablanca, Morocco.</span>
            <br />
            I am currently looking for a Angular Java Spring Boot Developer position.
            <br />
            I am currently pursuing my software engineering degree from the Mohammed VI Polytechnic University - 1337 School.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Discovering new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Akhsas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

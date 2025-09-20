import { Col, Container, Row } from "react-bootstrap";

export const Skills = () => {
  const skillsList = [
    "Android Development",
    "Software Development",
    "Figma",
    "Kotlin",
    "XML",
    "Front-End Development",
    "MERN",
    "HTML, CSS"
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10}>
            <div className="skill-bx text-center">
              <h2>Skills</h2>
              <p>
                I am familiar with using these skills in my project development and I am looking forward to learning more.
              </p>
              <div className="skills-row">
                {skillsList.map((skill, index) => (
                  <div className="skill-item" key={index}>{skill}</div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

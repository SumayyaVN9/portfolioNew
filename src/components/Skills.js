import { Col, Container, Row } from "react-bootstrap";

export const Skills = () => {
  const skillsList = [
    "MongoDB",
    "Figma",
    "CSS",
    "MERN Stack",
    "javascript",
    "XML",
    "HTML",
    "Python"
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10}>
            <div className="skill-bx text-center">
              <h2>Skills</h2>
              <p>
               I have worked with these skills in my projects and am eager to grow further.   </p>
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

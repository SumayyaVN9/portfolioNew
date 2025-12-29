import { Col, Container, Row } from "react-bootstrap";

export const Skills = () => {
  const skills = {
    Databases: ["MongoDB", "PostgreSQL"],

    "Programming Languages": ["Java", "JavaScript"],

    "Frontend Technologies": ["HTML", "CSS", "React.js", "Next.js"],

    "Backend Technologies": ["Node.js", "Express.js"],

    Tools: ["VS Code", "Git", "Figma"]
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10}>
            <div className="skill-bx ">
              <h2>Skills</h2>
              <p>
                I have worked with these skills in my projects and am eager to grow further. 
              </p>

              {Object.entries(skills).map(([category, items], index) => (
                <div className="skill-category" key={index}>
                  <h4>{category}</h4>
                  <div className="skills-row"> 
                    <h5>: </h5>{items.map((skill, i) => (
                      <div className="skill-item" key={i}>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

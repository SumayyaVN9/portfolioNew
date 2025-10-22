import { Container, Row, Col, Button } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          {/* <Col xs={12} md={6} xl={7}> */}
            <div className="box">
              <h1>Hi, I'm <span>Sumayya V N</span></h1>
              <h4>Software Developer</h4>
              <p>
               I’m a passionate Software Developer with a focus on building modern, user-friendly applications and systems.
               Let’s create something great together!
              </p>
              
              <Button
    className="btn-cta"
    aria-label="Open resume in new tab"
    onClick={() =>
      window.open(
        "https://drive.google.com/file/d/1CrhAeGUEoyy5k-unG80XLyPU6BB04qWs/view?usp=sharing",
        "_blank"
      )
    }
  >
    Resume <BsArrowRightCircle className="btn-icon" />
  </Button>
            </div>
          {/* </Col> */}
        </Row>
      </Container>
    </section>
  );
};

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
              {/* <Button
                onClick={() =>
                  window.open(
                    "https://www.canva.com/design/DAGkEUAi0t4/cPpyDHxk2ITjnJaae6Hpsg/view?utm_content=DAGkEUAi0t4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
                    "_blank"
                  )
                }
              >
                Resume <BsArrowRightCircle size={25} />
              </Button> */}
              <Button
    className="btn-cta"
    aria-label="Open resume in new tab"
    onClick={() =>
      window.open(
        "https://www.canva.com/design/DAGkEUAi0t4/cPpyDHxk2ITjnJaae6Hpsg/view?utm_content=DAGkEUAi0t4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
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

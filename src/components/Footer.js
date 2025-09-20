import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2 copy.svg";
import navIcon3 from "../assets/img/nav-icon3 copy.svg";


export const Footer = () => {


    
    return(
        <footer className="footer">
            <Container >
            <Row className="align-items-center justify-content-between">
                    
                    

                    
                    <Col xs={12} sm={4} className="text-center">
                        <p style={{ margin: "10px 0" }}>© 2025 sumayyaVN. All Rights Reserved</p>
                    </Col>

                    
                    <Col xs={12} sm={4} className="text-end">
                        <div className="social-icon" style={{ marginTop: "10px" }}>
                        {/* <h5 style={{ marginRight: "20px" }}>Contact Me</h5> */}
                        <a href="https://www.linkedin.com/in/sumayya-v-n-09aaa629b" target="_blank" rel="noopener noreferrer">
                            <img src={navIcon1} alt="LinkedIn Icon" /></a>

                        <a href="#"><img src={navIcon2} alt="icon2" /></a>
                        <a href="https://www.instagram.com/sumayya__sumi__"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={navIcon3} alt="Instagram" /></a>
                        </div>
                    </Col>
            </Row>

            </Container>
        </footer>

    )
} 
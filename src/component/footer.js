import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import icon_facebook from "assets/images/icon_facebook.png";
import icon_instagram from "assets/images/icon_instagram.png";
import icon_twitter from "assets/images/icon_twitter.png";
import icon_mail from "assets/images/icon_mail.png";
import icon_twitch from "assets/images/icon_twitch.png";
import rectangle from "assets/images/Rectangle.png";

const Footer = (props) => {
  return (
    <div>
      <Container
        id="Footer"
        className="container pt-lg-3 pt-0 mb-lg-5 mb-1 mt-5"
      >
        <Row className="footer row">
          <Col className="col-12 col-lg-4">
            <Nav className="nav d-block">
              <Nav.Item className="nav-item">
                <Nav.Link className="footer-link nav-link fw-bold" href="">
                  Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link className="footer-link nav-link fw-bold" href="">
                  binarcarrental@gmail.com
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link className="footer-link nav-link fw-bold" href="">
                  081-233-334-808
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className="col-12 col-lg-2">
            <Nav className="nav d-block">
              <Nav.Item className="nav-item">
                <Nav.Link className="footer-link nav-link" to="#Our-Services">
                  Our services
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link className="footer-link nav-link" to="#Why-Us">
                  Why Us
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link className="footer-link nav-link" to="#Testinomy">
                  Testimonial
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link className="footer-link nav-link" to="#Faq">
                  FAQ
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className="connect col-12 col-lg-3 fw-bold ps-4">
            <p>Connect with us</p>
            <div>
              <Link className="me-1" to="#">
                <img src={icon_facebook} alt="" />
              </Link>
              <Link className="mx-1" to="#">
                <img src={icon_instagram} alt="" />
              </Link>
              <Link className="mx-1" to="#">
                <img src={icon_twitter} alt="" />
              </Link>
              <Link className="mx-1" to="#">
                <img src={icon_mail} alt="" />
              </Link>
              <Link className="mx-1" to="#">
                <img src={icon_twitch} alt="" />
              </Link>
            </div>
          </Col>
          <Col className="copyright col-12 col-lg-2 fw-bold pt-3 ps-4 pt-lg-0 pb-5">
            <p>Copyright Binar 2022</p>
            <img src={rectangle} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import rectangle from "assets/images/Rectangle.png";
import img_car from "assets/images/img_car.png";

export const HeaderNav = ({ name, history, statusPencarian }) => {
  const navigate = useNavigate();
  const clickHandler = (e) => {
    navigate("/start-rent-car");
  };
  const home = (e) => {
    navigate("/");
  };
  return (
    <div className="header">
      {["xl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar">
          <Container>
            <Navbar.Brand onClick={home}>
              <img src={rectangle} alt="Navbar-Brand" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ width: "50%" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  BCR
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="nav-item justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#Our-Services">Our Services</Nav.Link>
                  <Nav.Link href="#Why-Us">Why Us</Nav.Link>
                  <Nav.Link href="#Testimony">Testimonial</Nav.Link>
                  <Nav.Link href="#Faq">FAQ</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      {/* <!-- Hero Section --> */}
      <Container
        id="Hero-section"
        className="container mt-4"
        style={{ height: statusPencarian === "success" ? 150 : "auto" }}
      >
        {statusPencarian !== "success" && (
          <Row className="row">
            <Col className="col text-hero col-12 col-lg-6">
              <h1 className="fw-bold">
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </h1>
              <p className="p-hero me-4 mt-4 fw-bold">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              {window.location.pathname !== "/start-rent-car" && (
                <Button
                  className="btn btn-sm pt-1 px-2 rounded-1 fw-bold btn-success"
                  onClick={clickHandler}
                  typeof="button"
                >
                  Mulai Sewa Mobil
                </Button>
              )}
            </Col>
            {statusPencarian !== "success" && (
              <Col className="col col-12 col-sm-6">
                <img className="img-car img-fluid" src={img_car} alt="car" />
              </Col>
            )}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default HeaderNav;

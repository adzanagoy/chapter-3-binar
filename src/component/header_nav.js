import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import rectangle from "assets/images/Rectangle.png";
import img_car from "assets/images/img_car.png";

const HeaderNav = (props) => {
  return (
    <div className="header">
      {["xl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar">
          <Container>
            <Navbar.Brand href="#">
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
                <Nav className="nav-link justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Our Services</Nav.Link>
                  <Nav.Link href="#action1">Why Us</Nav.Link>
                  <Nav.Link href="#action1">Testimonial</Nav.Link>
                  <Nav.Link href="#action1">FAQ</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      {/* <!-- Hero Section --> */}
      <Container id="Hero-section" className="container mt-4">
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
            <Button
              className="btn btn-sm pt-1 px-2 rounded-1 fw-bold btn-success"
              href="cariMobil.html"
            >
              Mulai Sewa Mobil
            </Button>
          </Col>
          <Col className="col col-12 col-sm-6">
            <img className="img-car" src={img_car} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderNav;

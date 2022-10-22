import { React } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import img_bg from "assets/images/bg-hero-section.png";
import img_car from "assets/images/img_car.png";

const AboutUs = (props) => {
  return (
    <div>
      <img
        className="img-bg position-absolute"
        src={img_bg}
        alt=""
        width="100%"
        height="495px"
      />

      {/* <!-- Hero Section --> */}
      <Container id="Hero-section" className="container mt-4">
        <Row className="row">
          <Col className="col text-hero col-12 col-lg-7">
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
          <Col className="col col-12 col-sm-5">
            <img className="img-car img-fluid" src={img_car} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;

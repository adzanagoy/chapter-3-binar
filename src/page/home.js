import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import img_service from "assets/images/img_service.svg";
import check_ourSevices from "assets/images/check-ourServices.png";
import icon_complete from "assets/images/icon_complete.png";
import icon_price from "assets/images/icon_price.png";
import icon_24hrs from "assets/images/icon_24hrs.png";
import icon_professional from "assets/images/icon_professional.png";
import img_photo from "assets/images/img_photo.png";
import star from "assets/images/Star 1.svg";
import vector_left from "assets/images/Vector-left.png";
import vector_right from "assets/images/Vector-right.png";

const Home = (props) => {
  const navigate = useNavigate();
  const clickHandler = (e) => {
    navigate("/start-rent-car");
  };
  return (
    <div>
      {/* <!-- Our Services --> */}
      <Container id="Our-Services" className="container">
        <Row className="row">
          <Col className="img-service col-12 col-md-6 text-end">
            <img
              className="image-services"
              src={img_service}
              alt=""
              width="459px"
            />
          </Col>
          <Col className="text-services col-12 col-md-6">
            <h3 className="fw-bold">
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h3>
            <p className="pt-2 fw-bold">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ul className="list-services fw-bold">
              <li className="d-flex align-item-center gap-2 my-3">
                <span>
                  <img src={check_ourSevices} alt="" width="21px" />
                </span>
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </li>
              <li className="d-flex align-item-center gap-2 my-3">
                <span>
                  <img src={check_ourSevices} alt="" width="21px" />
                </span>
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </li>
              <li className="d-flex align-item-center gap-2 my-3">
                <span>
                  <img src={check_ourSevices} alt="" width="21px" />
                </span>
                Sewa Mobil Jangka Panjang Bulanan
              </li>
              <li className="d-flex align-item-center gap-2 my-3">
                <span>
                  <img src={check_ourSevices} alt="" width="21px" />
                </span>
                Gratis Antar - Jemput Mobil di Bandara
              </li>
              <li className="d-flex align-item-center gap-2">
                <span className="">
                  <img src={check_ourSevices} alt="" width="21px" />
                </span>
                Layanan Airport Transfer / Drop In Out
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* <!-- Why Us --> */}
      <Container
        id="Why-Us"
        className="container mb-lg-5 mb-2 mt-lg-5 mt-5 pt-lg-3 pt-5 px-0"
      >
        <div className="why-us-description">
          <h3 className="fw-bold">Why Us?</h3>
          <p className="fw-bold mt-3">Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="why d-block d-md-flex gap-md-2 pt-2">
          <div className="box border-grey rounded-3 shadow-sm px-4 mx-0 me-lg-3">
            <img className="p-1 my-3" src={icon_complete} alt="" width="35px" />
            <h6 className="fw-bold">Mobil Lengkap</h6>
            <p className="mt-3 fw-bold">
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </p>
          </div>
          <div className="box border-grey rounded-3 shadow-sm px-4 mx-lg-3 mx-0">
            <img className="p-1 my-3" src={icon_price} alt="" width="35px" />
            <h6 className="fw-bold">Harga Murah</h6>
            <p className="mt-3 fw-bold">
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </p>
          </div>
          <div className="box border-grey rounded-3 shadow-sm px-4 mx-lg-3 mx-0">
            <img className="p-1 my-3" src={icon_24hrs} alt="" width="35px" />
            <h6 className="fw-bold">Layanan 24 Jam</h6>
            <p className="mt-3 fw-bold">
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </p>
          </div>
          <div className="box border-grey rounded-3 shadow-sm px-4 ms-lg-3 ms-0">
            <img
              className="p-1 my-3"
              src={icon_professional}
              alt=""
              width="35px"
            />
            <h6 className="fw-bold">Sopir Profesional</h6>
            <p className="mt-3 fw-bold">
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </p>
          </div>
        </div>
      </Container>

      {/* <!-- Testimony --> */}
      <Container
        id="Testimony"
        className="testimonial container text-center mt-2 pt-5 pb-2"
      >
        <div>
          <h3 className="fw-bold">Testimonial</h3>
          <h6 className="fw-bold mt-4 mx-5 mx-lg-0">
            Berbagai review positif dari para pelanggan kami
          </h6>
        </div>
        <Row className="testi text-start row rounded-1 mt-4 d-inline-flex">
          <Col className="div-testi-img col-12 col-lg-3 d-lg-flex d-inline text-center justify-content-lg-center pt-4">
            <img
              className="img-review"
              src={img_photo}
              alt=""
              width="80px"
              height="80px"
            />
          </Col>
          <Col className="div-star col-12 col-lg-9">
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <p className="testi-align text-testi mt-3 mt-lg-1 fw-bold">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </p>
            <p className="testi-align mt-1">John Dee 32, Bromo</p>
          </Col>
        </Row>

        <Row className="btn-slider row justify-content-center mt-3">
          <Button
            className="col-1 me-2 rounded-circle p-0 "
            variant="outline-secondary"
          >
            <img src={vector_left} alt="vector left" />
          </Button>
          <Button className="btn btn-success col-1 ms-2 rounded-circle p-0">
            <img src={vector_right} alt="vector right" />
          </Button>
        </Row>
      </Container>

      {/* <!-- Cta Banner --> */}
      <Container
        id="Cta-Banner"
        className="container text-center text-light rounded-3 fw-bold"
      >
        <h1 className="fw-bold lh-base">Sewa Mobil di (Lokasimu) Sekarang</h1>
        <div className="text-banner text-center">
          <p className="p-banner mt-2 d-lg-inline-flex d-inline px-0 px-lg-5 pt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Button
          onClick={clickHandler}
          className="btn-banner btn btn-success btn-sm"
        >
          Mulai Sewa Mobil
        </Button>
      </Container>

      {/* <!-- Faq --> */}
      <Container id="Faq" className="container pb-0 pb-lg-5">
        <Row className="row">
          <Col className="col-12 col-lg-5 text-lg-start text-center">
            <h4 className="faq-title fw-bold">Frequenly Asked Question</h4>
            <h6 className="faq-description pe-lg-5 pe-0 fw-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h6>
          </Col>
          <Col className="why-us-list col-12 col-lg-7">
            <div className="py-2 fw-bold">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="fw-bold">
                      Apa saja syarat yang dibutuhkan?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="py-2 fw-bold">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="fw-bold">
                      Berapa hari minimal sewa mobil lepas kunci?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="py-2 fw-bold">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="fw-bold">
                      Berapa hari sebelumnya sabaiknya booking sewa mobil?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="py-2 fw-bold">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="fw-bold">
                      Apakah Ada biaya antar-jemput?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="py-2">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="fw-bold">
                      Bagaimana jika terjadi kecelakaan
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

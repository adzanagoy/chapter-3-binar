import { React } from "react";
import { Form, Container, Col, Row, Accordion } from "react-bootstrap";
import mobil from "assets/images/img_mobil.png";

const DetailRentCar = (props) => {
  return (
    <div>
      {/* <!-- Pencarian --> */}
      <div id="pencarian" className="pencarian shadow-sm p-4 rounded-3">
        <h6 className="fw-bold ps-2 mb-3">Pencarianmu</h6>
        <table>
          <tr>
            <td>
              <Form.Label className="form-label col-form-label-sm p-0 m-0">
                Nama Mobil
              </Form.Label>
            </td>
            <td>
              <Form.Label className="form-label col-form-label-sm p-0 m-0">
                Kategori
              </Form.Label>
            </td>
            <td>
              <Form.Label className="form-label col-form-label-sm p-0 m-0">
                Harga
              </Form.Label>
            </td>
            <td>
              <Form.Label className="form-label col-form-label-sm p-0 m-0">
                Status
              </Form.Label>
            </td>
          </tr>
          <tr>
            <td>
              <Form.Control
                className="hasil-input form-hasil form-control-sm"
                type="text"
                placeholder="Nama Mobil"
                value={""}
                disabled
              />
            </td>
            <td>
              <Form.Control
                className="hasil-input form-hasil form-control-sm"
                type="text"
                placeholder="Kategori Mobil"
                value={""}
                disabled
              />
            </td>
            <td>
              <Form.Control
                className="hasil-input form-hasil form-control-sm"
                type="text"
                placeholder="Harga Sewa"
                value={""}
                disabled
              />
            </td>
            <td>
              <Form.Control
                className="hasil-input form-hasil form-control-sm"
                type="text"
                placeholder="Status Sewa"
                value={""}
                disabled
              />
            </td>
          </tr>
        </table>
      </div>

      {/* <!-- Detail Mobil --> */}
      <Container id="detail" className="container p-0">
        <Row className="row g-4">
          <Col className="col-7">
            <div className="detail border-grey shadow-sm rounded-3 p-4">
              <p className="fw-bold">Tentang Paket</p>
              <p className="fw-bold">Include</p>
              <ul>
                <li>
                  Apa saja yang termasuk dalam paket misal durasi max 12 jam
                </li>
                <li>Sudah termasuk bensin selama 12 jam</li>
                <li>Sudah termasuk Tiket Wisata</li>
                <li>Sudah termasuk pajak</li>
              </ul>
              <p className="fw-bold">Exclude</p>
              <ul>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1">
                  <Accordion.Header
                    className=""
                    style={{
                      padding: "0 0 20px 0",
                      fontWeight: "bold",
                      fontSize: "14",
                    }}
                  >
                    Refund, Reschedule, Overtime
                  </Accordion.Header>
                  <Accordion.Body className="p-0">
                    <ul>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
          <Col className="col-5">
            <div className="card-detail text-center border-grey shadow-sm rounded-3 p-4 pb-5">
              <img
                src={mobil}
                className="d-inline text-center img-detail mb-5"
                alt="Mobil"
              />
              <div className="d-grid gap-2 text-start">
                <p className="detail-car-name fw-bold">Innova</p>
                <p className="detail-car-des">
                  <img src="assets/images/fi_users.png" alt="" />6 - 8 orang
                </p>
                <div className="d-flex">
                  <h5 className="card-title fw-bold pb-5">Total</h5>
                  <h5 className="card-title fw-bold pb-5 ms-auto">
                    Rp 500.000
                  </h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailRentCar;

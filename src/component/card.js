import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CarCard = ({ data }) => {
  const navigate = useNavigate();
  const clickHandler = (e) => {
    navigate("/Detail-rent-car");
  };
  const formatNumeric = (number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  return (
    <Row className="row g-3">
      {data.map((item, index) => {
        return (
          <Col key={index} className="col-4">
            <Card className="mobil-card">
              <Card.Img
                src={
                  item.image
                    ? item.image
                    : "https://assets.mitsubishi-motors.co.id/products/colors/1627575530-pajero-4x4-whitepng.png"
                }
                alt="car-list"
                className="card-img-top"
              />
              <Card.Body className="card-body d-grid gap-2">
                <Card.Text className="card-text">{item.name}</Card.Text>
                <Card.Title className="card-title fw-bold">
                  {formatNumeric(item.price)} / hari
                </Card.Title>
                <Card.Text className="card-text fw-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <Button
                  onClick={clickHandler}
                  className="btn py-2 btn-success btn-sm"
                >
                  Pilih Mobil
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default CarCard;

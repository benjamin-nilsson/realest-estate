import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import "./../../css/Browse.css";
import HouseInfo from "./HouseInfo";

function Browse() {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna " +
    "aliqua. Dui sapien eget mi proin sed libero. Sapien eget mi proin sed libero. Feugiat vivamus at augue eget arcu dictum " +
    "varius duis. Quis lectus nulla at volutpat diam ut. Risus viverra adipiscing at in tellus integer feugiat. Aliquet enim tortor " +
    "at auctor. Nunc sed blandit libero volutpat sed cras ornare. Dui accumsan sit amet nulla facilisi morbi tempus. ";

  const houses = [
    {
      imgSrc: "images/beachHouse.jpg",
      address: "lorem 22",
      squareFootage: "69m²",
      bed: 2,
      bath: 4,
      price: "19444$",
      description: `${lorem}`,
    },
    {
      imgSrc: "images/modernSquareHouse.jpeg",
      address: "ipsum 372",
      squareFootage: "612m²",
      bed: 33,
      bath: 45,
      price: "694000$",
      description: `${lorem}`,
    },
    {
      imgSrc: "images/modernHouse1.jpg",
      address: "dolor 55",
      squareFootage: "649m²",
      bed: 22,
      bath: 43,
      price: "100000$",
      description: `${lorem}`,
    },
    {
      imgSrc: "images/house-isolated-field.jpg",
      address: "sit amet 6",
      squareFootage: "69m²",
      bed: 2,
      bath: 4,
      price: "902311$",
      description: `${lorem}`,
    },
    {
      imgSrc: "images/house_modern.jpeg",
      address: "consecetur 4",
      squareFootage: "612m²",
      bed: 33,
      bath: 45,
      price: "799500$",
      description: `${lorem}`,
    },
    {
      imgSrc: "images/homeLogo.jpg",
      address: "adipiscing 9",
      squareFootage: "649m²",
      bed: 22,
      bath: 43,
      price: "967321$",
      description: `${lorem}`,
    },
    {
      imgSrc: "images/celebrityHouses.jpg",
      address: "eiusmod 5",
      squareFootage: "612m²",
      bed: 33,
      bath: 45,
      price: "100000$",
      description: `${lorem}`,
    },
    {
      imgSrc: "images/sydneyOperaHouse.jpg",
      address: "incididunt 7",
      squareFootage: "649m²",
      bed: 22,
      bath: 43,
      price: "244676$",
      description: `${lorem}`,
    },
  ];
  return (
    <div className="browse">
      <Container fluid>
        <Row className="headerImage">
          <Col className="headerText" md={"auto"}>
            <h1>Featured Homes</h1>
          </Col>
        </Row>

        <Container fluid className="houseContainer">
          <Row className="houseRows">
            <Col xs={"auto"} md={3}>
              <HouseInfo houseInfo={houses[0]} />
            </Col>
            <Col xs={"auto"} md={3}>
              <HouseInfo houseInfo={houses[1]} />
            </Col>
            <Col xs={"auto"} md={3}>
              <HouseInfo houseInfo={houses[2]} />
            </Col>
            <Col xs={"auto"} md={3}>
              <HouseInfo houseInfo={houses[3]} />
            </Col>
          </Row>
          <Row className="houseRows botHouseRow">
            <Col xs={"auto"} md={3}>
              <HouseInfo houseInfo={houses[4]} />
            </Col>
            <Col xs={"auto"} md={3}>
              <HouseInfo houseInfo={houses[5]} />
            </Col>
            <Col xs={"auto"} md={3}>
              <HouseInfo houseInfo={houses[6]} />
            </Col>
            <Col xs={"auto"} md={3}>
              <HouseInfo houseInfo={houses[7]} />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Browse;

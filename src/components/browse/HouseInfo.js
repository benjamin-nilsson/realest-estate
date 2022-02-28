import React from "react";
import {
  Col,
  Row,
  Container,
  Image,
  OverlayTrigger,
  Button,
  Popover,
} from "react-bootstrap";
import { FaBath, FaBed } from "react-icons/fa";
import { useState, useEffect } from "react";

function HouseInfo({ houseInfo }) {
  const randomizeView = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const [count, setCount] = useState(randomizeView);

  useEffect(() => {
    setCount(() => count + 1);
  }, []);
  return (
    <Container fluid>
      <Row>
        <Col>
          <Image fluid src={houseInfo.imgSrc} />
        </Col>
        <Col>
          <Row>
            <h4>{houseInfo.address}</h4>
          </Row>
          <Row>
            <h4>{houseInfo.squareFootage}</h4>
          </Row>
          <Row sm md={"auto"}>
            <Col>
              <h4>{houseInfo.bed}</h4>
            </Col>
            <Col>
              <FaBed color="white" />
            </Col>
          </Row>
          <Row sm md={"auto"}>
            <Col>
              <h4>{houseInfo.bath}</h4>
            </Col>
            <Col>
              <FaBath color="white" />
            </Col>
          </Row>
          <Row>
            <h4>{houseInfo.price}</h4>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{houseInfo.description}</p>
          <OverlayTrigger
            trigger="click"
            overlay={
              <Popover id={"popover-positioned-top"}>
                <Popover.Header as="h3">{`Contact us!`}</Popover.Header>
                <Popover.Body>
                  <strong>To make an offer:</strong> <br></br> Please contact
                  one of our representatives!
                </Popover.Body>
              </Popover>
            }
          >
            <Button className="buttonOffer" variant="danger">
              Make an offer!
            </Button>
          </OverlayTrigger>
          <Button
            className="buttonOffer"
            variant="danger"
            onClick={() => setCount((c) => c + 1)}
          >
            See more
          </Button>
          <p>Views: {count}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default HouseInfo;

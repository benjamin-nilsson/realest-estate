import React from "react";
import { Container, Form, Button, Col, Row, Card } from "react-bootstrap";
import BannerContact from "./BannerContact";
import "./../../css/Contact.css";
const Contact = () => {
  return (
    <div>
      <div className="d-md-none">
        <div style={{ background: "#1D1D1D", height: "100%" }}>
          <BannerContact />
          <Container>
            <Row>
              <Col xs={{ order: "last" }}>
                <Form style={{ background: "#181818", padding: "50px" }}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label style={{ color: "#FFFFFF" }}>Name *</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEnail">
                    <Form.Label style={{ color: "#FFFFFF" }}>
                      Email *
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicSubject">
                    <Form.Label style={{ color: "#FFFFFF" }}>
                      Subject *
                    </Form.Label>
                    <Form.Control type="subject" placeholder="Enter subject" />
                  </Form.Group>
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                    style={{ color: "#FFFFFF" }}
                  >
                    Message *
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                  ></textarea>
                  <br></br>
                  <Button
                    className="btn"
                    style={{
                      background: "orangered",
                      border: "none",
                      outline: "none",
                    }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              </Col>
              <Col xs={{ order: "first" }}>
                <Card
                  className="text-left"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#181818",
                    color: "#FFFFFF",
                    border: "none",
                  }}
                >
                  <Card.Body>
                    <br></br>
                    <br></br>
                    <Card.Title
                      style={{ fontFamily: "SignikaSC", fontSize: "25px" }}
                    >
                      Welcome and contact us Realest Estates
                    </Card.Title>
                    <br></br>
                    <br></br>
                    <Card.Text>
                      Customer service: <i> marketplace@Realest.com</i>
                      <br></br>Service and Support: <i> support@Realest.com</i>{" "}
                      <br></br>
                      Partner:
                      <i> partner@Realest.com</i> <br></br> Work with us:
                      <i> job@Realest.com</i>
                    </Card.Text>
                    <br></br>
                    <Card.Text style={{ opacity: "80%" }}>
                      Phonenumber: 031-828474
                    </Card.Text>
                    <br></br>
                    <Card.Text style={{ opacity: "80%" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do <br></br>eiusmod tempor incididunt ut labore et
                      dolore magna aliqua.{" "}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="d-none d-md-block">
        <div style={{ background: "#1D1D1D", height: "76.1rem" }}>
          <BannerContact />
          <Container style={{ marginTop: "1%" }}>
            <Row>
              <Col md={6}>
                <Form style={{ background: "#181818", padding: "50px" }}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label style={{ color: "#FFFFFF" }}>Name *</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEnail">
                    <Form.Label style={{ color: "#FFFFFF" }}>
                      Email *
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicSubject">
                    <Form.Label style={{ color: "#FFFFFF" }}>
                      Subject *
                    </Form.Label>
                    <Form.Control type="subject" placeholder="Enter subject" />
                  </Form.Group>
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                    style={{ color: "#FFFFFF" }}
                  >
                    Message *
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                  ></textarea>
                  <br></br>
                  <Button
                    className="btn"
                    style={{
                      background: "orangered",
                      border: "none",
                      outline: "none",
                    }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              </Col>
              <Col md={{ span: 5, offset: 1 }}>
                <Card
                  className="text-left"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#181818",
                    color: "#FFFFFF",
                    border: "none",
                  }}
                >
                  <Card.Body>
                    <br></br>
                    <br></br>
                    <Card.Title
                      style={{ fontFamily: "SignikaSC", fontSize: "25px" }}
                    >
                      Welcome and contact us Realest Estates
                    </Card.Title>
                    <br></br>
                    <br></br>
                    <Card.Text>
                      Customer service: <i> marketplace@Realest.com</i>
                      <br></br>Service and Support: <i> support@Realest.com</i>{" "}
                      <br></br>
                      Partner:
                      <i> partner@Realest.com</i> <br></br> Work with us:
                      <i> job@Realest.com</i>
                    </Card.Text>
                    <br></br>
                    <Card.Text style={{ opacity: "80%" }}>
                      Phonenumber: 031-828474
                    </Card.Text>
                    <br></br>
                    <Card.Text style={{ opacity: "80%" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do <br></br>eiusmod tempor incididunt ut labore et
                      dolore magna aliqua.{" "}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};
export default Contact;

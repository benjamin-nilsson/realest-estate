import React from "react";
import { useState } from "react";
import { Card, Form, Row, Col, Container, Button } from "react-bootstrap";
import { RiImageAddFill } from "react-icons/ri";
import "./../../css/BlogPost.css";
import { Navigate, useNavigate } from "react-router-dom";

const BlogPost = ({ onAdd, onCancelOrPost }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [src, setSrc] = useState("images/celebrityHouses.jpg");

  const addPost = (e) => {
    e.preventDefault();

    if (!title) {
      alert(`Please fill out all fields`);
      return;
    }

    if (!text) {
      alert(`Please fill out all fields`);
      return;
    }

    onAdd({ title, text, src });

    setTitle("");
    setText("");
    onCancelOrPost();
  };

  return (
    <div>
      <div className="d-none d-md-block">
        <div
          style={{
            background: "#1D1D1D",
            paddingTop: "8rem",
          }}
        >
          <Container fluid="md">
            <Card style={{ background: "#C4C4C4", paddingBottom: "1rem" }}>
              <Form>
                <Row>
                  <Col
                    md={3}
                    style={{ paddingLeft: "2rem", paddingTop: "1rem" }}
                  >
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Title"
                        minLength={2}
                        maxLength={50}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={{ span: 1, offset: 7 }}>
                    <RiImageAddFill size={65} />
                  </Col>
                </Row>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={15}
                    placeholder="blog post..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    minLength={10}
                    maxLength={250}
                    required
                  />
                </Form.Group>
                <Row
                  className="d-flex justify-content-end"
                  style={{ paddingRight: "9rem", textAlign: "center" }}
                >
                  <Col md={2} style={{ paddingRight: "7rem" }}>
                    <Button
                      onClick={onCancelOrPost}
                      size="lg"
                      style={{
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                        borderRadius: "30px",
                        textAlign: "center",
                        border: "none",
                        background: "#fff",
                        color: "#000",
                      }}
                    >
                      Cancel
                    </Button>
                  </Col>
                  <Col md={2} style={{ textAlign: "center" }}>
                    <Button
                      onClick={addPost}
                      size="lg"
                      style={{
                        paddingLeft: "3rem",
                        paddingRight: "3rem",
                        borderRadius: "30px",
                        border: "none",
                        background: "orangered",
                        color: "#000",
                      }}
                    >
                      Post
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Container>
        </div>
      </div>

      <div className="d-md-none">
        <div
          style={{
            background: "#1D1D1D",
            height: "60rem",
            paddingTop: "50%",
          }}
        >
          <Container fluid="xs">
            <Card style={{ background: "#C4C4C4", paddingBottom: "1rem" }}>
              <Form>
                <Row>
                  <Col
                    xs={8}
                    style={{ paddingLeft: "1rem", paddingTop: "1rem" }}
                  >
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Title"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={{ span: 1, offset: 1 }}>
                    <RiImageAddFill size={65} />
                  </Col>
                </Row>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    as="textarea"
                    rows={15}
                    placeholder="blog post..."
                  />
                </Form.Group>
                <Row>
                  <Col style={{ paddingLeft: "2rem" }}>
                    <Button
                      onClick={onCancelOrPost}
                      size="lg"
                      style={{
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                        borderRadius: "40%",
                        textAlign: "center",
                        border: "none",
                        background: "#FF6D6D",
                        color: "#000",
                      }}
                    >
                      Cancel
                    </Button>
                  </Col>
                  <Col style={{ paddingLeft: "3rem" }}>
                    <Button
                      onClick={addPost}
                      size="lg"
                      style={{
                        paddingLeft: "3rem",
                        paddingRight: "3rem",
                        borderRadius: "40%",
                        border: "none",
                        background: "#92FF81",
                        color: "#000",
                      }}
                    >
                      Post
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

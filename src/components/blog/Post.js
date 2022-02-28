import React from "react";
import "./../../css/Post.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Post = ({ title, text, src }) => {
  return (
    <Container
      className="post"
      style={{
        background: "#181818",
        color: "#fff",
      }}
    >
      <Row xs={1} md={2}>
        <div className="post__info">
          <h1>{title}</h1>
          <h5>{text}</h5>
        </div>
        <img className="postImg" src={src} alt="" />
      </Row>
    </Container>
  );
};

export default Post;

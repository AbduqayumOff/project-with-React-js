import React from "react";
import styles from "./blog.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { BlogData } from "../../constants/BlogData";

const Blog = () => {
  return (
    <Container>
      <Row className="title">
        <Col lg={8} className="offset-lg-2">
          <h1>Blog</h1>
        </Col>
      </Row>

      {BlogData.map((item, index) => (
        <Row key={index} className={styles.card}>
          <Col lg={8} className="offset-lg-2">
            <h1>{item.title}</h1>
            <span>{item.data}</span>
            <span>{item.type}</span>
            <p>{item.desc}</p>
            <hr />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Blog;

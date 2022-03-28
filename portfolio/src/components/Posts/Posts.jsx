import styles from "./posts.module.scss";
import { Row, Col } from "react-bootstrap";
import React from "react";
import { PostsData } from "../../constants/PostsData";

const Posts = () => {
  return (
    <div className={styles.wrapper}>
      <Row className={`align-items-center ${styles.rowHead}`}>
        <Col>
          <h1>Recent posts</h1>
        </Col>
        <Col className="d-flex justify-content-end">
          <a href="#">View all</a>
        </Col>
      </Row>
      <Row>
        {PostsData.map((item, index) => (
          <Col key={index} lg={6} md={6} sm={12} className={styles.colCard}>
            <div className={styles.box}>
              <h2>{item.title}</h2>
              <span>{item.data}</span>
              <span>{item.job}</span>
              <p>{item.desc}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Posts;

import React from "react";
import styles from "./homePage.module.scss";
import { Row, Col } from "react-bootstrap";
import profilPic from "../../assets/images/portfolio_Pic.png";

const HomePage = (props) => {
  const { DataHomePage } = props;
  return (
    <Row className={`align-items-center ${styles.customRow}`}>
      <Col lg={6} md={6} sm={12} className="sn-text-center">
        <h1>{DataHomePage.name}</h1>
        <p>{DataHomePage.desc}</p>
        <a href="#">{DataHomePage.dowloadResume}</a>
      </Col>
      <Col lg={6} md={6} sm={12} className={`${styles.imgBox}`}>
        <img src={profilPic} alt="Profil-Pic" />
      </Col>
    </Row>
  );
};

export default HomePage;

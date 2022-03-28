import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomePage from "../../components/Home-Page/HomePage";
import Posts from "../../components/Posts/Posts";
import styles from "./home.module.scss";
import { DataHomePage } from "../../constants/HomePage";
import { ProjectData } from "../../constants/ProjectData";
import Project from "../../components/Projects/Project";

const Home = () => {
  return (
    <Fragment>
      <Container>
        <HomePage DataHomePage={DataHomePage[0]} />
      </Container>

      <Container fluid className={styles.bg}>
        <Container>
          <Posts />
        </Container>
      </Container>

      <Container>
        <Row>
          <Col className={styles.center}>
            <h1 className={styles.title}>Featured works</h1>
          </Col>
        </Row>

        {ProjectData.map((item, index) => (
          <Project key={index} projectData={item} />
        ))}
      </Container>
    </Fragment>
  );
};

export default Home;

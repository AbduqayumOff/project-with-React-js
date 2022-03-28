import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Project from "../../components/Projects/Project";
import { ProjectData } from "../../constants/ProjectData";

const Work = () => {
  return (
    <Container>
      <Row className="title">
        <Col>
          <h1>Work</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {ProjectData.map((item, index) => (
            <Project key={index} projectData={item} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Work;

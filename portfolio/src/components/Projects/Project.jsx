import { Row, Col, Badge } from "react-bootstrap";
import styles from "./project.module.scss";

const Project = (props) => {
  const { projectData } = props;
  return (
    <Row className={styles.card}>
      <Col xl={2} md={3} className={`ps-0 ${styles.customP}`}>
        <div className={styles.imgBox}>
          <button className={styles.openBtn}>Open</button>
          <img src={projectData.imgURL} alt="img Project" />
        </div>
      </Col>
      <Col xl={10} md={9} className={`pe-0 ${styles.customP}`}>
        <h1>{projectData.title}</h1>
        <Badge className={styles.cBadge}>{projectData.year}</Badge>
        <span className={styles.type}>{projectData.type}</span>
        <p>{projectData.desc}</p>
      </Col>
      <div className={styles.line}></div>
    </Row>
  );
};

export default Project;

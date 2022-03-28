import styles from "./footer.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Facebook from "../../assets/icons/Facebook/Facebook";
import Instagram from "../../assets/icons/Instagram/Instagram";
import Twitter from "../../assets/icons/Twitter/Twitter";
import Linkedin from "../../assets/icons/Linkedin/Linkedin";

const Footer = () => {
  return (
    <Container>
      <div className={`text-center ${styles.footer}`}>
        <Row>
          <Col className={styles.icons}>
            <a href="#">
            <Facebook />
            </a>
            <a href="#">
            <Instagram />
            </a>
            <a href="#">
            <Twitter />
            </a>
            <a href="#">
            <Linkedin />
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Copyright ©2020 All rights reserved </h1>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Footer;

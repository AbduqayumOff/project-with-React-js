import React from "react";
import styles from "./navbar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Works",
    path: "/works",
  },
  {
    display: "Blog",
    path: "/blog",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

export default function NavbarC() {
  const { pathname } = useLocation();

  const active = headerNav.findIndex((e) => e.path === pathname);
  return (
    <Navbar
      className={styles.navbar}
      collapseOnSelect
      expand="lg"
      bg="transparent"
      oynaya
      kiwoyed
    >
      <Container>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`ms-auto ${styles.navLink}`}>
            <ul>
              {headerNav.map((item, index) => (
                <li
                  key={index}
                  className={`${index === active ? styles.active : ""}`}
                >
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

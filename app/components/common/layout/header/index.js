"use client";
import React, {useState, useEffect} from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Logo from "../../logo";
import Link from "next/link";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const headerClassName = scrolling ? "scrolled" : "";
  return (
    <section className={`header-section ${headerClassName}`}>
      <Navbar expand="lg" className="navbar-light">
        <Container fluid>
          <Navbar.Brand href="#">
            {/* <Logo /> */}
           Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
              <div className="menu-wrapper">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <Nav.Link href="#action2">Tokenomics</Nav.Link>
                <Nav.Link href="#action2">Road Map</Nav.Link>
                <Nav.Link href="#action2">Contact</Nav.Link>
                </div>
              
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;

import React from "react";
import "./styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Image, NavDropdown } from "react-bootstrap";
import Iwww from "../img/navbar/www.png";
import InicioI from "../img/navbar/inicio.png";
import ServiciosI from "../img/navbar/servicios.png";
import CatalogoI from "../img/navbar/catalogo.png";
import ContactenosI from "../img/navbar/contactenos.png";

const NavbarD = () => (
  <Navbar fixed="top" bg="light" variant="light" expand="md">
    <Navbar.Brand href="../">
      <img
        src={Iwww}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="SitioWebGt"
      />
    </Navbar.Brand>
    <Navbar.Brand href="../">SitioWebGt.com</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <NavDropdown.Divider />
        <Nav.Link className="paginas" href="../">
          {" "}
          <Image src={InicioI} width="21" rounded /> Inicio
        </Nav.Link>
        <NavDropdown.Divider />
        <Nav.Link className="paginas" href="../Servicios">
          {" "}
          <Image src={ServiciosI} width="25" rounded /> Servicios
        </Nav.Link>
        <NavDropdown.Divider />
        <Nav.Link className="paginas" href="../Catalogo">
          {" "}
          <Image src={CatalogoI} width="22" rounded /> Catálogo
        </Nav.Link>
        <NavDropdown.Divider />
        <Nav.Link className="paginas" href="../Contactenos">
          {" "}
          <Image src={ContactenosI} width="22" rounded /> Contáctenos
        </Nav.Link>
        <NavDropdown.Divider />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default NavbarD;

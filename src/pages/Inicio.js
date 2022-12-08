import React from "react";
import Navbar from "../components/Navbar";
import "../components/styles/Inicio.css";
import { Image, Row, Col } from "react-bootstrap";
import DesaWeb from "../img/inicio/desarrolloweb.jpg";
import MedidaI from "../img/inicio/medida.png";
import ResponsiveI from "../img/inicio/responsive.png";
import ModernoI from "../img/inicio/moderno.png";
import FuncionalI from "../img/inicio/funcional.png";

const Inicio = () => {
  return (
    <React.Fragment>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <h1 className="text-center display-3">SitioWebGt</h1>
        <br />
        <p className="text-center h5">
          ¿Conoces alguna marca o negocio exitoso que no tenga su propio sitio
          web?
        </p>
        <br />
        <br />
        <div className="container">
          <Row>
            <Col xs={12} md={6}>
              <Image src={DesaWeb} alt="Diseño y Desarollo Web" width="100%" />
            </Col>
            <Col xs={12} md={6} className="centrarV">
              <br />
              <p className="text-justify lead">
                SitioWebGt es una empresa de diseño y desarrollo web
                comprometida a mejorar la imagen de tu negocio, conseguir nuevos
                clientes e incrementar las ventas de tus productos o servicios.
              </p>
            </Col>
          </Row>
        </div>
        <br />
      </div>
      <div>
        <br />
        <br />
        <div className="container-fluid back">
          <h2 className="display-4">¿Qué ofrecemos?</h2>
          <br />
          <br />
          <div className="row text-justify">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <br />
              <Image src={MedidaI} className="imag" rounded />
              <br />
              <div className="tarjeta">
                <h2>Sitio Web a la Medida</h2>
                <br />
                <p className="text-center lead">
                  Llevamos tu negocio a internet con un sitio web personalizado
                  y único.{" "}
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <br />
              <Image src={ResponsiveI} className="imag" rounded />
              <br />
              <div className="tarjeta">
                <h2>Sitio Web Responsive</h2>
                <br />
                <p className="text-center lead">
                  Tu sitio web se adaptará a cualquier dispositivo que sea
                  utilizado para ver tus productos y/o servicios.{" "}
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <br />
              <Image src={FuncionalI} className="imag" rounded />
              <br></br>
              <div className="tarjeta">
                <h2>Sitio Web Funcional</h2>
                <br />
                <p className="text-center lead">
                  Tu sitio será diseñado y estructurado de la mejor forma para
                  que las personas te encuentren y logres cerrar la venta.{" "}
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <br />
              <Image src={ModernoI} className="imag" rounded />
              <br></br>
              <div className="tarjeta">
                <h2>Sitio Web Moderno</h2>
                <br />
                <p className="text-center lead">
                  Tu sitio web inspirará confianza y profesionalidad a tus
                  futuros clientes.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Inicio;

import React from "react";
import Navbar from "../components/Navbar";
import WhatsApp from "../components/WhatsApp";
import "bootstrap/dist/css/bootstrap.min.css";

const Catalogo = () => {
  return (
    <React.Fragment>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="container">
        <h1 className="text-center display-4">Catálogo</h1>
        <p className="text-center lead">
          ¡Cualquiera de estos sitios webs se puede adaptar a tu empresa!
        </p>
        <br />
        <br />
      </div>
      <div className="container">
        <p className="text-center lead">Catágolo en construcción...</p>
        <br />
        <br />
      </div>
    </React.Fragment>
  );
};
export default Catalogo;

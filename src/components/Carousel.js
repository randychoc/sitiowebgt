import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactCardCarousel from "react-card-carousel";

class Carousel extends React.Component {
  static get CARD_STYLE() {
    return {
      height: "auto",
      width: "210px",
      "background-color": "#302b63",
      color: "#ffffff",
      padding: "10px",
      borderRadius: "10px",
      boxSizing: "content-box",
      overflow: "hidden",
      "text-align": "center",
    };
  }
  render() {
    return (
      <div>
        <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
          <div style={Carousel.CARD_STYLE}>
            <h2>Por Evento</h2>
            <br></br>
            <p>
              Q200 por 3 cambios realizados en el momento. Pague por lo que usa,
              no hay cuota mensual.
            </p>
          </div>
          <div style={Carousel.CARD_STYLE}>
            <h2>Plan Intermedio</h2>
            <br></br>
            <p>
              Q300 mensual por 5 modificaciones mensuales (no acumulables) a la
              página.
            </p>
          </div>
          <div style={Carousel.CARD_STYLE}>
            <h2>Plan Completo</h2>
            <br></br>
            <p>Q600 mensual con derecho a cambios ilimitados a la página.</p>
          </div>
        </ReactCardCarousel>
      </div>
    );
  }
}
export default Carousel;

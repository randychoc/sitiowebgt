import React from 'react'
import Navbar from '../components/Navbar'
import WhatsApp from '../components/WhatsApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/styles/Servicios.css'
import { Card } from 'react-bootstrap'
import IcoSitioWeb from '../img/servicios/sitioweb.png'
import IcoRenovacion from '../img/servicios/renovacion.png'

const Servicios = () => {
    return (
        <React.Fragment>
            <WhatsApp />
            <Navbar />
            <br /><br /><br /><br />
            <div className="container-fluid">
                <h1 className="text-center display-4">Servicios</h1>
                <br />
                <p className="text-center lead">¿Necesitas un sitio web profesional o renovar el sitio que tienes? Es tu oportunidad.</p>
            </div>
            <br />
            <hr />
            <br />
            <div className="text-center lead backS">
                <p>Tu sitio web es la mejor manera de promocionar tu marca o negocio. Actualmente la mayoría de personas supone que tu negocio está en internet y lo primero que hacen es ir a buscarlo. Y lo mejor, tu sitio web estará disponible 24/7</p>
            </div>
            <div className="container">
                <br />
                <hr />
                <h2 className="display-4 tituloB">Nuestros Servicios</h2>
                <hr />
                <br />
                <div>
                    <Card className="cardD" border="danger" >
                        <Card.Header>
                            <div className="row">
                                <div className="col-sm-1 col-md-3 col-lg-1 text-center">
                                    <img
                                        className="cardI"
                                        src={IcoSitioWeb}
                                        alt="SitioWebGt"
                                        placeholder="SitioWebGt"
                                    />
                                </div>
                                <div className="col-sm-11 col-md-9 col-lg-11 cardTH">
                                    Sitio Web a la medida para tu marca o negocio
                            </div>
                            </div>
                        </Card.Header>
                        <Card.Body className="text-justify">
                            <Card.Text className="col">
                                Si una persona desea conocer sobre tu empresa será tan fácil como acceder al sitio web y consultar información como ubicaciones, quiénes son, a qué se dedican, qué productos o servicios ofrecen, horarios de atención, sucursales, etc.
                                <br /><br />
                                ¿Está listo para dar el salto a internet? ¡Contáctenos!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card className="cardD" border="danger" >
                        <Card.Header>
                            <div className="row">
                                <div className="col-sm-1 col-md-3 col-lg-1 text-center">
                                    <img
                                        className="cardI"
                                        src={IcoRenovacion}
                                        alt="SitioWebGt"
                                        placeholder="SitioWebGt"
                                    />
                                </div>
                                <div className="col-sm-11 col-md-9 col-lg-11 cardTH">
                                    Renovar tu Sitio Web
                            </div>
                            </div>
                        </Card.Header>
                        <Card.Body className="text-justify">
                            <Card.Text className="col">
                                ¿Ya tiene tu propio sitio web? Muy bien, pero es necesario mantener un diseño y contenido actualizado para lograr captar la atención de más clientes y tener más ventas.
                                <br /><br />
                                ¿Deseas renovar tu Sitio Web? ¡Contáctenos!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br /><br />
                    <div className="container">
                        <p className="text-center lead"> ¡Contáctenos, será un gusto apoyarlo en su crecimiento!</p>
                    </div>
                </div>
            </div>

            <br /><br /><br /><br /><br />
        </React.Fragment>
    )
}
export default Servicios
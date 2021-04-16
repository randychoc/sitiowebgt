import React from 'react'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/styles/Contacto.css'
import { Container, Form, Button, Col, Image } from 'react-bootstrap'
import GmailI from '../img/contacto/gmail.svg'
import LocationI from '../img/contacto/location.svg'
import LinkedInI from '../img/contacto/linkedin.svg'
import GithubI from '../img/contacto/github.svg'

const Contactenos = () => {
    return (
        <React.Fragment>
            <Navbar />
            <br /><br /><br />
            <div className="container">
                <h1 className="text-center display-4">Contáctenos</h1>
                <br />
                <p className="text-center lead">¿Quieres llevar tu negocio a internet? ¿Desea más información?</p>
                <br />
                <p className="text-center lead">Puede comunicarse con nosotros a través de nuestras redes sociales, por correo o por llamada.</p>
                <br /><br />
            </div>

            <Container className="py-4 bg-light">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <p className="my-3 text-center">CONTACTO</p>
                        <ul classNames="list-group list-group-flush">
                            <li className="list-group-item letraBlack"><img src={GmailI} class="align-middle" width="35px" alt="Gmail"></img> chocrandy@gmail.com</li>
                            <li className="list-group-item letraBlack"><img src={LocationI} class="align-middle" width="35px" alt="Ubicación"></img> Ciudad de Guatemala, Guatemala</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <p className="my-3 text-center">SIGUEME</p>
                        <ul classNamess="list-group list-group-flush">
                            <a href="https://www.linkedin.com/in/randychoc" target="_blank" className="list-group-item letraBlack"><img src={LinkedInI} class="align-middle" width="35px" alt="LinkedIn"></img>LinkedIn</a>
                            <a href="https://github.com/randychoc" target="_blank" className="list-group-item letraBlack"><img src={GithubI} class="align-middle" width="35px" alt="Github"></img>Github</a>
                        </ul>
                    </div>
                </div>
            </Container>
            {/* <Container>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" value="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit"> Submit </Button>
                </Form>
            </Container> */}

        </React.Fragment>
    )
}
export default Contactenos
import React from 'react'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

const Portafolio = () => {
    return (
        <React.Fragment>
            <Navbar />
            <br /><br /><br />
            <div className="container">
                <h1 className="text-center display-4">Portafolio</h1>
                <p className="text-center lead">¡Empresas que confían en nuestro servicio!</p>
                <br /><br />
            </div>

        </React.Fragment>
    )
}
export default Portafolio
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/styles/WhatsApp.css'
// import MessengerCustomerChat from 'react-messenger-customer-chat'
import IcoWhatsApp from '../img/contacto/whatsapp.png'

const WhatsApp = () => (
    <div>
        <div>
            {/* <MessengerCustomerChat
                pageId="115025896958107"
                appId="331794801166197"
                language='es_LA'
                logged_in_greeting="Bienvenido a SitioWebGt, ¿En qué te podemos ayudar?"
                logged_out_greeting="Bienvenido a SitioWebGt, ¿En qué te podemos ayudar?"
                greeting_dialog_display="show"
                greeting_dialog_delay={10}
                // allow_login="true"                       
            />             */}
        </div>
        <div className="floatwa">
            <a href="https://api.whatsapp.com/send?phone=+50247707384&text=Hola%20SitioWebGt.com%20deseo%20contratar%20sus%20servicios."
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={IcoWhatsApp}
                    className="icoRed rounded"
                    alt="WhatsApp"
                />
            </a>
        </div>
    </div>
)
export default WhatsApp
import './Contact.scss';
// import { useEffect, useState } from 'react';

const Contact = () => {
    // const [letterClass, setLetterClass] = useState('text-animate');
    return (
        <div className='contactContainer'>
            <div className='text'>
                <h1>¡Contactanos!</h1>
                <p>Si te gustaron algunos de nuestros proyectos te invitamos a completar
                    el formulario para que podamos conocerte mejor y ofrecerte un servicio
                </p>
                <form>
                    <div className='boxes'>
                        <input type="text" id="nombre" placeholder='Nombre'/>
                        <input type="email" id="correo" placeholder='Correo Electronico'/>
                    </div>
                    <div className='boxes'>
                    <input type="number" id="telefono" placeholder='Numero de Telefono'/>
                    <input type="text" id="asunto" placeholder='Asunto del Email'/>
                    </div>
                    <textarea id="mensaje" placeholder='Escribe tu mensaje'></textarea>
                    <input type="submit" id="enviar" placeholder='Enviar mensaje'/>
                </form>
            </div>
        </div>
    )
}

export default Contact;
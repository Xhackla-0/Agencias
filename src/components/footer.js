import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faCheckSquare, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faWhatsappSquare, faYoutubeSquare, faInstagram, faSkype   } from '@fortawesome/free-brands-svg-icons';
/* import Fondo from '../fondo.png'; */

import './footer.css';

export default function Footer() {
  return (
    <>
      <div className='containerfooter'>      
            <FontAwesomeIcon icon={ faBars } className="icon" />
            <FontAwesomeIcon icon={ faAnglesRight }  className="icon" />
            <FontAwesomeIcon icon={ faCheckSquare }  className="icon" />
            <FontAwesomeIcon icon={ faTimes }  className="icon" /> 
            <FontAwesomeIcon icon={ faFacebook } size="2x" className="icon"/>
            <FontAwesomeIcon icon={ faBars } className="icon" />
            <FontAwesomeIcon icon={ faWhatsapp } className="icon"/>
            <FontAwesomeIcon icon={ faWhatsappSquare} className="icon" />
            <FontAwesomeIcon icon={ faYoutubeSquare} className="icon" />
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            <FontAwesomeIcon icon={faSkype} className="icon" />
     
        </div>        
              <center>© 2024 Todos los Derechos Reservados</center>
    </>
  )
}

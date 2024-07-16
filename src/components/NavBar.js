import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faBars } from '@fortawesome/free-solid-svg-icons'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home'; 

import './NavBar.css';

function NavBar() {
    
    const [oculto, setOculto] = useState(true);
    
    const ocultar = () => {        
    setOculto(!oculto); // Cambia el estado 'oculto' al hacer clic    
  };
    
   const menuIconStyle = {
    display: oculto ? 'block' : 'none', // Aplica 'none' solo cuando oculto es true    
    viewBox: '0 0 30 50', // Establece la vista según tus requerimientos
  };
    
  return (
    <Router>
      <div className='container'>
          <div className='logo'>    
            <h2>Menu</h2> 
             <FontAwesomeIcon icon={faAnglesRight} className = "menu-flecha"  onClick={ocultar}/>        
          </div>
              <nav className='menu' style={menuIconStyle}>
      
                <ul className="menu">
                  <li><Link to="/">Inicio</Link></li>
                  <li><Link to="/FAQ">FAQ</Link></li>                            
                  <li><Link to="/Servicios">Servicios</Link>
      
                      <ul className="submenu">
                         <li><Link to="/Paquete-1">Opcion1</Link></li>
                         <li><Link to="/Paquete-2">Opcion2</Link></li>
                         <li><Link to="/Paquete-3">Opcion3</Link></li>
                         <li><Link to="/Paquete-4">Opcion4</Link></li>
                         <li><Link to="/Paquete-5">Opcion5</Link></li>
                         <li><Link to="/Paquete-6">Opcion6</Link></li>
                      </ul>
      
                    </li>                      
                      <li><Link to="/About">About</Link></li>
                      <li><Link to="/Contacto">Contacto</Link></li>
                </ul>
              </nav>
              <FontAwesomeIcon icon={ faBars } className="menu-icon" onClick={ocultar}/> 
                 {/* <svg className="menu-icon" onClick={ocultar}
                     // Aplica el estilo condicional
                        width="40"
                        height="50"    
                        viewBox="0 0 30 50"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect width="30" height="4" fill="white" />
                        <rect y="12" width="30" height="4" fill="white" />
                        <rect y={24} width="30" height="4" fill="white" />
                  </svg> */}
                      

            </div>
      
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/FAQ"          element={<p>Contenido FAQ</p>}/>
                    <Route path="/servicios"    element={<p>Contenido de Servicios</p>} /> 
                    <Route path="/paquete-1"    element={<p>Contenido de Paquete-1</p>} /> 
                    <Route path="/paquete-2"    element={<p>Contenido de Paquete-2</p>} /> 
                    <Route path="/paquete-3"    element={<p>Contenido de Paquete-3</p>} /> 
                    <Route path="/paquete-4"    element={<p>Contenido de Paquete-4</p>} /> 
                    <Route path="/About"        element={<p>Contenido de About Us</p>} /> 
                    <Route path="/Contacto"     element={<p>Contenido de Contact</p>} /> 
                </Routes>
      
    </Router>
  );
}

export default NavBar;

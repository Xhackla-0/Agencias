// Home.js
import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <>
     <div className="home">   
        <   div className='texto'>
                <h2>Quienes Somos</h2>
                <hr />
                <br />
                <p>* Somos tu mejor opción para planear tus Vacaciones, familiares, en pareja o con amigos.
                    Atendemos con las más reconocidas cadenas hoteleras en Perú. <br /><br />
                    La mejor opción para viajar y disfrutar de unas increíbles vacaciones, todo incluido.
                    Todo lo que tú necesitas, paquetes Vacacionales con Tarifas bajas. <br /><br />          
                    Contáctanos, es muy fácil, solo pide tu cotización, paquetes para todos los presupuestos.
                </p>
            </div>
        
                <div className='gif'>          
                <img src='https://static.wixstatic.com/media/13c109_ddb5743d30fd424da54c2c81dbf41811~mv2.gif' alt='Descripción de la imagen' style={{width:"50%"}}/>
                </div>
     </div>  
    </>
  );
};

export default Home;
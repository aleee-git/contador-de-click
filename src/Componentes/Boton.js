import React from "react";
import '../Styles/Boton.css'

/* Agregar las 3 props de la funcion */
function Boton ({texto, esBotonDeClick, manejarClick}) {
    return (
        /* Agregar props al button
        esBotonDeClick es un operador ternario para saber la condicion del boton
        Si es boton de click se asigna la clase "boton-click"
        Sino se asigna la clase "boton-reiniciar" */
        <button className={ esBotonDeClick ? "boton-click" : "boton-reiniciar" } 
        onClick={manejarClick}>
            {texto}
        </button>
    );
}

/* Exportar boton */
export default Boton;
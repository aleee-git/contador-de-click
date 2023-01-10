import React from "react";
import '../Styles/Contador.css'

function Contador ({ numeroDeClick }) {
    return (
        <div className="Contador">
            {numeroDeClick}
        </div>
    );
}

export default Contador;
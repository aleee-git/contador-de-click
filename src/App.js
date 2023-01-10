import './App.css';
import Boton from './Componentes/Boton';
import Contador from './Componentes/Contador';
import logoCat from './Images/Logo.webp';
/* Importar hook */
import { useState } from 'react';

function App () {

  /* Constante para el hook 
  Se le asigna un estado cero inicial */
  const[numClick, setNumClick] = useState (0);


  /* Definir funcion flecha JS 
  Definir los parametros en ()
  Retornar ponerlo en {} */
  const manejarClick = () => {
    console.log("Si funciona esta shit :)");

    /* Cada click sumara 1 al estado setNumClick */
    setNumClick(numClick + 1);
  };

  const reiniciarcontador = () => {
    console.log("Si funciona esta shit :)");

    /* Reinicar el contador */
    setNumClick(0);
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={logoCat} alt="Logo"/>
      </div>

      <div className="main-container">
      <Contador numeroDeClick={numClick}/>

      <Boton
      texto="Click" 
      esBotonClick={true} 
      manejarClick={manejarClick} />

      <Boton
      texto="Reiniciar" 
      esBotonClick={false} 
      manejarClick={reiniciarcontador} />
      </div>

    </div>
  );
}

export default App;

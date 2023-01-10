import './App.css';
import Boton from './Componentes/Boton';
import Contador from './Componentes/Contador';
import logoCat from './Images/Logo.webp';

function App() {

  /* Definir funcion flecha JS 
  Definir los parametros en ()
  Retornar ponerlo en {} */
  const manejarClick = () => {
    console.log("Si funciona esta shit :)");
  }

  const reiniciarcontador = () => {
    console.log("Si funciona esta shit :)");
  }
  

  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={logoCat} alt="Logo"/>
      </div>

      <div className="main-container">
      <Contador numeroDeClick="5"/>

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

import React, { Fragment, useState }from 'react'
import Header from './componentes/header';
import Formulario from './componentes/formulario';
import Mensaje from './componentes/mensaje';
import Resultado from './componentes/resultado';
import Spinner from './componentes/spinner';
function App() {

  const [cantidad, guardadCantidad] = useState(0)
  const [plazo, guardarPlazo] = useState(0)
  const [total, guardarTotal] = useState(0)
  const [cargando, guardarCargando] = useState(false)


  let componente
  if(cargando === true){
    componente = <Spinner/>
  }else if(total === 0 || plazo === ''){
    componente = <Mensaje/>

  }else{
    componente = <Resultado
      total={total}
      plazo={plazo}
      cantidad={cantidad}
    />

  }
  return (
    <Fragment>
      
      <Header 
      titulo="Cotizador de prestamos"
      />
      <div className='container'>
      <Formulario
        cantidad={cantidad}
        guardadCantidad={guardadCantidad}
        plazo={plazo}
        guardarPlazo={guardarPlazo}
        guardarTotal={guardarTotal}
        guardarCargando={guardarCargando}
      />
      <div className='mensajes'>
        {componente}
      </div>
    

      </div>
    </Fragment>
  );
}

export default App;

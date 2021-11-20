import React, {useEffect, useState} from 'react';
import { Ejemplo } from './Ejemplo';

const url = 'https://registrohooks.herokuapp.com/registros/';

function App() {

const [state, setstate] = useState([])

useEffect(() => {
  getData();
}, [])


  const getData = async() => {
    const respuesta = await fetch(url);
    const data = await respuesta.json()
     setstate(data)
  }



  return (
    <div >
       <h1>Hola componente</h1>
       <Ejemplo parametro={state}/>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react'
import {AvisoComponets} from './AvisoComponets'

export const PruebasComponets = () => {

  let fechaActual = new Date();
  let fechaA = fechaActual.getFullYear(); 
  console.log(fechaA);

  const [usuario, setUsuario]=useState("Silfredo Orozco");
  const [year,setYear] = useState(fechaA);
  const [contador,setContador] = useState(0);

  const modUsuario = e =>{
    setUsuario(e.target.value);
  }

  const cambiarFecha = e =>{
    setYear(year+1);
  }
  
  // este useEffect solo se ejecuta una vez, solo al cargar el componente
  useEffect(()=>{
    console.log("Has cargado el componente PurebasComponets !!")
  },[]);

  // este useEffect solo se ejecuta cada vez, que se modifique el usuario
  useEffect(()=>{
    setContador(contador+1);
    console.log("Has modificado el usuario: "+contador);
  },[usuario]);

 /*  // este useEffect solo se ejecuta cada vez, que hay un cambio en el componente
  useEffect(()=>{
    console.log("Has cargado el componente PurebasComponets o has realizado un cambio de un estado !!")
  }); */

  return (
    <div>
        <h1>El efecto - Use-effect</h1>
        <strong className={ contador >= 10 ? 'label label-green':'label'}>
          {usuario}
        </strong>
        <strong className='label'>
          {year}
        </strong>
        <p>
          <input type="text" placeholder='Cambia tu nombre' onChange={modUsuario}/>
          <button onClick={cambiarFecha}>Cambiar fecha</button>
        </p> 
        {usuario == "DANILO" && <AvisoComponets usuario={usuario}/>}
    </div>
  );
};

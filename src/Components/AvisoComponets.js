import React, { useEffect } from 'react'

export const AvisoComponets = ({usuario}) => {

    useEffect( () => {
        // CUANDO EL COMPONENTE SE MONTA
        alert("El componente AvisoComponets esta montado !!");

        // CUANDO EL COMPONENTE SE DESMONTA
        return () => {
            alert("COMPONENTE DESMONTADO !!!");
        };
    },[]);

  return (
    <div>
        <hr/>
        <h1>Saludos {usuario} Quetal estas</h1>
        <button onClick={e => {
            alert("Welcome !!")
        } }>Mostrar alerta</button>
    </div>
  )
}

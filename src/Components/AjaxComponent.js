import React, { useEffect, useState } from 'react'



export const AjaxComponent = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [usuarios2, setUsuarios2] = useState([]);
    const [concatenar, setConcatenar] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [errores,setErrores] = useState("");
    // GENERICO Y BASICO

    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 9,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            },
            {
                "id": 10,
                "email": "byron.fields@reqres.in",
                "first_name": "Byron",
                "last_name": "Fields",
                "avatar": "https://reqres.in/img/faces/10-image.jpg"
            },
            {
                "id": 11,
                "email": "george.edwards@reqres.in",
                "first_name": "George",
                "last_name": "Edwards",
                "avatar": "https://reqres.in/img/faces/11-image.jpg"
            },
            {
                "id": 12,
                "email": "rachel.howell@reqres.in",
                "first_name": "Rachel",
                "last_name": "Howell",
                "avatar": "https://reqres.in/img/faces/12-image.jpg"
            }
        ]);
    }

    

    const getUsuariosAjaxPromesa = () =>{
        fetch("https://reqres.in/api/users?page=2")
            .then(respuesta => respuesta.json())
            .then(
                resultado_final => {
                    setUsuarios(resultado_final.data);
                    console.log(resultado_final.data);
                },
                error => {
                    console.log(error);
                }
            )
    }

    const getUsuariosAjaxPromesa2 = () =>{
        fetch("https://reqres.in/api/users?delay=3")
            .then(respuesta => respuesta.json())
            .then(
                resultado_final => {
                    setUsuarios2(resultado_final.data);
                    console.log(resultado_final.data);
                },
                error => {
                    console.log(error);
                }
            )
    }
    
    const concatenarUsuarios = () => {
        setConcatenar(usuarios.concat(usuarios2));
    }

    const getUsuariosAjaxAwait = () => {
        
            setTimeout(async () => {
                try{
                    const peticion = await fetch("https://reqres.in/api/users?delay=3");
                    const {data} = await peticion.json();
                    setConcatenar(data);
                    if(data){
                        setCargando(false);
                    }
                    console.log(data);
                }catch(error){
                    console.log(error.message);
                    setErrores(error.message);
                }
            },2000);
    }

    useEffect( () =>{
        //getUsuariosEstaticos();
        //getUsuariosAjaxPromesa();
        //getUsuariosAjaxPromesa2();
        //concatenarUsuarios();
        getUsuariosAjaxAwait();
    }, []);


   if(errores !== ""){
        // cuando hay  un  error
        return (
            <div className='errores'>
                 {errores}
            </div>
    );
   }else if(cargando == true){

    // cuando todo esta cargando
    return (
        <div className='cargando'>
            Cargando datos.....
        </div>
    );

   }else if(cargando == false && errores === ""){
    // cuando todo ha ido bien
    return (
        <div>
            <h2>Listado de Usuarios via Ajax</h2>
            <ol className='usuarios'>
                {
                    concatenar.map( usuario => {
                        return (<li key={usuario.id}>
                                    <img src={usuario.avatar} width="20" />
                                    &nbsp;
                                    {usuario.first_name}  {usuario.last_name} 
                                </li>);
                    })
                }
            </ol>
        </div>
    )
   }
  
}

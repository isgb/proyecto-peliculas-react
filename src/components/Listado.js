import React, { useEffect, useState } from 'react'
import { Editar } from './Editar'

const Listado = ({listadoState, setListadoState}) => {

    // const [listadoState, setListadoState] = useState([])

    const [editar, setEditar] = useState(0)

    useEffect(() => {
        console.log("Componentes del listado de peliculas cargadas!!")
        conseguirPeliculas();
    }, [])

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"))

        // console.log(peliculas)
        setListadoState(peliculas)

        return peliculas;
    }

    const borrarPeli = (id) => {
        // alert(id)
        // Conseguir peliculaas almacenadas 
        let pelis_almacenadas = conseguirPeliculas();

        // Filtrar esas peliculas para quem elimine del array lo que no quiero
        let nuevo_array_peliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id))

        // console.log(pelis_almacenadas, nuevo_array_peliculas)
        // Actualir estado del listado
        setListadoState(nuevo_array_peliculas)

        // Actualizar los datos en el localstorage
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_peliculas))

    }

    return (
        <>
            {
                listadoState != null ? 
                
                listadoState.map(peli => {
                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.titulo}</h3>
                            <p className="description">{peli.descripcion}</p>

                            <button className="edit" onClick={ () => setEditar(peli.id)}>Editar</button>
                            <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>
                         
                         {/*aparece formulario de editar*/}
                         {
                            editar === peli.id && (
                                // <h1>FORMULARIO</h1>
                                <Editar peli={peli}
                                        conseguirPeliculas={conseguirPeliculas}
                                        setEditar={setEditar}
                                        setListadoState={setListadoState}
                                />
                            )
                         }

                        </article>
                    );
                }) :

                <h2>No hay peliculas para mostrar</h2>
            }

        </>
    )
}

export default Listado;
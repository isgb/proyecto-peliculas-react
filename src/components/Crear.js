import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage'

export const Crear = ({setListadoState}) => {

    const tituloComponente = "Añadir película"

    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    })

    const { titulo, descripcion } = peliState

    const conseguirDatosForm = e => {
        e.preventDefault();

        //Conseguir datos del formulario
        let target = e.target;
        let titulo = target.title.value;
        let descripcion = target.description.value;

        // alert("Enviando Formulario")
        let pelicula = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        // Guardar estado
        setPeliState(pelicula)

        // Actualizar el estado del lkstado principal
        setListadoState((elementos) => {
            return [...elementos,pelicula]
        })

        // console.log(peliState)
        // Guardar en el almacenamiento local
        GuardarEnStorage("pelis",pelicula)

    }

  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>

        <strong>
             {(titulo && descripcion) && "Has creado a película:" + titulo}
        </strong>
        
        <form onSubmit={conseguirDatosForm}>
            <input 
                type="text" 
                id="title" 
                placeholder="Titulo" 
            />

            <textarea 
                id="description" 
                placeholder="Descripción">    
            </textarea>

            <input 
                type="submit" 
                id="save" 
                value="Guardar" 
            />
        </form>
    </div>
  )
}


export const GuardarEnStorage = (clave, elemento) => {
    // localStorage.setItem('pelis', JSON.stringify([pelicula]))

    // Conseguir los elementos que ya tenemos en localstorage
    let elementos = JSON.parse(localStorage.getItem(clave))

    // Comprobar si es un array
    if(Array.isArray(elementos)){
        // Añadir dentro del array un elemento nuevo
        elementos.push(elemento)
    }else{
        // Crear un array con la nuevo elemento
        elementos = [elemento];
    }

    // Guardar en el localstorage
    // console.log(elementos)
    localStorage.setItem(clave, JSON.stringify(elementos));

    // Devolver objeto guardado
    return elemento;
}
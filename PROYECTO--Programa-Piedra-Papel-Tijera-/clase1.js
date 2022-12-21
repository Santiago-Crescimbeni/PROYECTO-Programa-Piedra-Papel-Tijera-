/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */ 

function iniciarJuego() {

    // suludamos al usuario
   // alert("Bienvenido al piedra papel o tijera de Frontend II.");
   
    // guardamos en una variable en nombre ingresado
    const nombre = prompt("Ingese su nombre por favor:")
   
     isNaN(nombre) && nombre.length>3? alert("Gracias por jugar " +  nombre.toUpperCase() + ". ¡Mucha suerte!"): alert("Nombre Invalido, debe contener mas de 3 caracteres de tipo texto") + iniciarJuego();
    

    // mostramos los datos por consola
    console.log("----------------------------");
    console.log("El jugador es:")
    console.log(nombre);
    console.log("----------------------------");

    return nombre;
}

// creamos una variable a nivel global para guardar el nombre del jugador que nos devuelve la función
 //const nombreJugador = iniciarJuego();

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA EXTRA                                    */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.


 
    


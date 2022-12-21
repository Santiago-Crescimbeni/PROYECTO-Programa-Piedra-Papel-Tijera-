// Tenemos varias funciones a disposicion en nuestro programa.
// Debemos reutilizarlas y acomodar nuestro juego para que el mismo sea al mejor de 3 partidas.
// Esto significa que el primero que gane 2 partidas va ser el ganador. Con lo cual pueden repetirse varias rondas hasta que esto suceda.

// Listemos las funciones para recordarlo mejor
// FUNCION 1: iniciarJuego()
// -> Es la que se encarga de recopilar el nombre del jugador y saludarlo.
// FUNCION 2: pedirJugada()
// -> Esta se encarga de pedirle una eleccion al usuario hasta que ingrese un número válido.
// FUNCION 3: jugadaRandom()
// -> Utiliza el objeto Math para generar un numero aleatorio entre 1 y 3
// FUNCION 4: compararJugadas()
// -> Se encarga de comparar ambas elecciones y definir cómo le fue al usuario

/* ------------------------------ 👇Comenzamos ------------------------------ */
// Primero debemos limpiar los scripts anteriores y dejar solo las funciones, quitamos las variables y las empezamos a declarar solo en este script

let puntajes = {
    usuario: 0,
    computadora: 0,
    empates:0,
    cantidadDeRondas:0
}

let nombreJugador = iniciarJuego();
console.log(nombreJugador);

// 👇 mientras ninguno haya llegado a 2 puntos seguimos jugando
while (puntajes.usuario < 2 && puntajes.computadora < 2) {
    let resultadoDePartida = compararJugadas()
    
    alert(resultadoDePartida);

    console.log(resultadoDePartida);
    if (resultadoDePartida.includes("ganaste")) {
        puntajes.usuario++;
        puntajes.cantidadDeRondas++;
    } else if (resultadoDePartida.includes("ganaste")) {
        puntajes.computadora++;
        puntajes.cantidadDeRondas++;
    }else {
        puntajes.empates++;
        puntajes.cantidadDeRondas++;
    }

    console.table(puntajes);

}

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA EXTRA                         */
/* -------------------------------------------------------------------------- */
// 1- Modificar el objeto puntajes para poder contabilizar los empates tambien.
// 2- Modificar el bucle para poder sumar tambien la cantidad de empates.
// 3- Mostrar en cada partida el resultado al usuario.
// 4- Mostrar finalmente la cantidad de partidas jugadas y que sepa cuantas ganó, perdió o empató durante el juego.puntajes



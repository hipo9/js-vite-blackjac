import { crearCartaHTMl } from './crear-carta-js';
import { pedirCarta } from './pedirCarta';
import { valorCarta } from './valorCarta';


/**
 * turno de la computadora
 * @param {Number} puntosMinimos puntos minimos para que la computadora gane
 * @param {HTMLElement} elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora element para mostrar las cartas
 * @param {Array<String>} deck  
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck ) => {

    if ( !puntosMinimos ) throw Error( 'Puntos minimos son necesario' );
    if ( !deck ) throw Error( 'El deck es necerario' );
    if ( !puntosHTML) throw Error( 'Argumento puntosHTML es necesario' );

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHTMl(carta);
        divCartasComputadora.append( imgCarta );

        if ( puntosMinimos > 21 ) {
            break;
        }

    } while ( ( puntosComputadora < puntosMinimos ) && ( puntosMinimos <= 21 ) );

    setTimeout( () => {
        if ( puntosComputadora === puntosMinimos ) {
            alert( 'Nadie gana :(' );
        } else if ( puntosMinimos > 21 ) {
            alert( 'La computadora es el ganador, suerte para la proxima' )
        } else if ( puntosComputadora > 21 ) {
            alert( 'Uested es el ganador, que krack' );
        } else {
            alert( 'La computadora es el ganador, suerte para la proxima' )
        }
    }, 100 );
}
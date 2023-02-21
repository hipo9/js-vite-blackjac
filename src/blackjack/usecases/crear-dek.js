import _ from 'underscore';



/**
 * Esta funcion crear un nuevo deck
 * @param {Array<string>} tipoCarta Ejemp.['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales Ejemp.['A', 'J', 'Q', 'K']
 * @returns {Array<string>} regresa un nuevo deck de cartas
 */
export const crearDeck = ( tipoCarta, tiposEspeciales ) => {
    if ( !tipoCarta || tipoCarta === 0 ) {
        throw new Error( 'TiposDeCarta es obligatorio' )
    }
    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) {
        throw new Error( 'tiposEspeciales tiene que ser una arreglo de string' )
    }


    let deck = [];
    for ( let i = 2; i <= 10; i++ ) {
        for ( let tipo of tipoCarta ) {
            deck.push( i + tipo );
        }
    }

    for ( let tipo of tipoCarta ) {
        for ( let esp of tiposEspeciales ) {
            deck.push( esp + tipo );
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}
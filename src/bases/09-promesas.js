
import { getHeroById } from './bases/08-imp-exp';



const getHeroByIdAsync = (id) => {

    return new Promise( ( resolve, reject ) => {

        setTimeout( ()=> {
            const hero = getHeroById( id );

            if ( hero ) {
                resolve( hero );
            } else {
                reject('Heroe no existe');
            }
        }, 1000);
    });

}

getHeroByIdAsync(1)
    .then( h => {
        console.log(`El héroe es: ${ h.name }`)
    })
    .catch( err => console.log(err));








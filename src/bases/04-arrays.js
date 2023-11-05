

const arreglo = [1,2,3,4];
arreglo.push( 5 );

console.log( arreglo );

const arreglo2 = [ ...arreglo ];
arreglo2.push( 6 );

console.log( arreglo2 );

const arreglo3 = arreglo2.map( function( n ){
    return n * 2;
});

console.log( arreglo3 );






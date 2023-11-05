

function saludar( xyz ) {
    return `Hola ${ xyz } desde saludar`;
}

const saludar2 = function( xyz ) {
    return `Hola ${ xyz } desde saludar2`;
}

const saludar3 = ( xyz ) => `Hola ${ xyz } desde saludar3`;

const nombre = 'Tony';

const getUser = () => ({
    uid: 'ABC123',
    username: 'Tony001'
});


console.log( saludar(nombre) );
console.log( saludar2(nombre) );
console.log( saludar3(nombre) );
console.log( getUser() );

const heroes = [{
    id: 1,
    name: 'Batman'
},{
    id: 2,
    name: 'Superman'
}]

const existeID = heroes.some( ( heroe ) => heroe.id === 3 );
const existeHeroe = heroes.find( ( heroe ) => heroe.id === 1);
console.log( existeID );
console.log( existeHeroe.name );

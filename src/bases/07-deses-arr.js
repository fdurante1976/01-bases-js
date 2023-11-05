

const characters = ['Goku', 'Vegeta', 'Trunks', 'Goten'];

const [ g, v, t, goten = 'No tiene valor'] = characters;

console.log( v );


const returnArray = () => {
    return ['ABC', 123]
};

const [ letters, numbers ] = returnArray();

console.log( letters, numbers );
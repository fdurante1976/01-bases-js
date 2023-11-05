

const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman'
};
console.log( person.name );
console.log( person.age );
console.log( person.codeName );

const { name, age, codeName, power = 'No tiene el poder' } = person;

console.log( name );
console.log( age );
console.log( codeName );
console.log( power );

const createHero = ({ name, age, codeName, power }) => 
    ({

        id: 1123416523,
        name,
        age,
        codeName,
        power
    
    });

console.log( createHero(person) );

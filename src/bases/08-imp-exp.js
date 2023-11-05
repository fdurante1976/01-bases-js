
import superHeroes from '../data/heroes';

export const getHeroById = (id) => superHeroes.find( heroe => heroe.id === id );

export const getHeroesByOwner = (owner) => superHeroes.filter( hero => hero.owner === owner );





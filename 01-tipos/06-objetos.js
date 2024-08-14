// personaje de tv 
let nombre = "tanjiro";
let anime = "demon slayer";
let edad = 16

let personaje = {
    nombre:"tanjiro",
    anime:"demon slayer",
    edad:16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

personaje.edad = 13; 
llave = "edad";
personaje[llave] = 15 //es mejor usar esta forma 

delete personaje.anime; //elimina el valor de anime 

console.log(personaje);

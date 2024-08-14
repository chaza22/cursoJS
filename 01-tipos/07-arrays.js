// otros le dicen arreglo al arrays
let animales = ['chanchito','caballo']; // se le conoce como arrays literal, puede ser vacio o le agregamos algo

console.log(animales);//cada posicion tiene un indice, el cero es chanchito
console.log(animales[0]);
animales[2] = 'dragon';
console.log(animales);
animales[10] = 'pez';
console.log(animales[7]);
console.log(typeof animales);//los arrays se comportan como objetos 
console.log(animales.length);//nos da la longitud del arrays
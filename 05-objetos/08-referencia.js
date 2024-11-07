// let a = 1;
// let b = a;

// b++;
// console.log(a, b);

// let a = {};
// let b = a;

// b.prop = 1;
// console.log(a, b);
//los objetos cuando los asignamos como variables, lo que hace es crear una direccion en una parte de la memoria y el objeto se guarda en otra parte de la memoria y cuando accedemos a este a traves de las variables lo que sucede es que ingresamos a modificarlos

// let a = 1;

// function suma(n) {
//     n++;
// }

// suma(a);
// console.log(a);
//cada vez que definimos parametros JS va a crear una variable especial para ese parametro, en este caso toma a "a" y a "n" como 2 varaibles distintas

let a = { prop: 1 };

function suma(n) {
    n.prop++;
}

suma(a);
console.log(a);
//no pasa lo mismo porque aca le pasamos una referencia, los objetos se pasan por referencia

//los tipos de datos primitivos se copian cuando los asignamos a otras variables 
//los tipos de datos de referencia se crea una referencia, entonces se referencias (objetos, array, funciones)
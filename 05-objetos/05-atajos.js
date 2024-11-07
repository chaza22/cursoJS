//cuando definimos un objeto en js, lo que tenemos que hacer es crear una variable 
let obj = {}; //este es un atajo que tiene js para llamar al constructor de objetos 
let obj2 = new Object();

/**
 * new Array(); []
 * new String(); "" '' ``
 * new Number(); 12
 * new Boolean(); true false
 */

function Usuario() {
    this.name = "Chanchito feliz";
}
let user = new Usuario();
console.log(user.constructor);

// cuando preguntemos el "typeof "" " este nos devuelve que es un string
//pero si preguntamos el typeof de un string creado con un constructor "typeog new String()" este nos devuelve object, esto paso con los demas tambien
//lso string, number y boolean se comportan distintos a los que fueron creados por los constructores

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(s1, s2);
//independientemente de cual usemos vamos a poder seguir realizando acciones sobre estos string, pero si evaluamos el contenido de estos string y intentamos interpretarlo dentro de JS, el que se creo con el constructor queda igual y el otro se interpreta
//para que el codigo no tenga comportamientos distintos en algunas partes y en otras, es mejor usar siempre los string literales en caso de que tenga que crearlos
//pero si por alguna razon tengo que crear el string usando el constructor y despues necesito obtener su valor, puedo usar ".valueOF()", y esto nos devuelve su valor pero como string literal
console.log(s2.valueOf());
//no solo los string tiene su ".valueOF()" sino que los demas tambien lo tiene
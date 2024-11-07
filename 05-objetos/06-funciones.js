//las funciones en JS tambien son objetos y se las considera de primera clase, esto quiere decir que las funciones pueden ser asigandas a otras variables pasadas como argumentos a otras funciones o tambien retornadas de otras funciones y ademas estas tambien tiene propiedades 
function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);//devuelve el nombre de la funcion
console.log(Usuario.length);//nos indica la cantidad de argumentos que recibe una funcion 

//tambien podemos tomar una funcion y asignarsela a una variable
const U = Usuario
let user = new U('Nicolas');

console.log(user);

//tambien podemos pasar las funciones como argumentos 
function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, 'chanchito');
console.log(user1);

//tambien las podemos retornar dentro de otras funciones 
function returned() {
    return function() {
        console.log('hola mundo');
    }
}

let saludo = returned();
saludo();

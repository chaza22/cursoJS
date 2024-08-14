function suma(a, b) {
    console.log(arguments);//nos devuelve todos los valores de los parametros de la funcion, aunque esta no es la mejor 
    return a + b;
}
//cuando referenciamos los valores dentro de las funciones, estas se llaman parametros
//let resultado = suma(5);//aca el valor de 5 que le damos se le llama argumento 
let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);
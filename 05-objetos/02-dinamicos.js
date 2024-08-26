//en js los objetos son dinamocos, podemos agregar o quitar propiedades como queremos y ademas podemos cambiar su valor
//lo importante de un objeto es que se lea bien, siempre adecuarse al equipo
const user = { id: 1,};//al ser una constante no podemos reasignar el valor de esta 
user.name = 'nicolas'
user.guardar = function () {
    console.log('guardando', user.name);
}
//cuando usamos la palabra reservada de const para definir una variable lo que pasa es que no nos va a dejar cambiar el valor de la variable, pero si agregar o quitarle propiedades a los objetos y tambien a los arrays, tambien podemos eliminar propiedades que ya tiene
//si pusiera user = 1; no me dejaria usarlo, no podemos cambiarle el valor a una varible que fue definida como constante 
user.guardar();
delete user.name;
delete user.guardar;
console.log(user);//aca borramos las propiedades anteriores que habiamos agregado
//no podemos cambiar el valor de una variable definida con const, pero si el valor que le asignamos es un objeto si podemos cambiarle el valor a las propiedades de ese objeto, o agregar, o quitar, lo que no podemos hacer es que deje de ser un objeto  
//si no queremos que se modifique un objeto que creamos, tenemos que usar el metodo object.freeze() esto hace que no se pueda modificar un objeto el cual se haya creado, ni cambiar propiedades, ni cambiar sus valores
//const user1 = Object.freeze({ id:1 });
const user1 = Object.seal({ id:1 });//si quisieramos poder cambiarle los valores a las propiedades que ya tiene pero no agregarle o quitarle propiedades podemos usar seal  
user1.name = 'nico';
user1.id = 2;
console.log(user1);//no le agrego la propiedad de .name ni tampoco cambia el valor de .id (todo eso con freeze). con seal podemos cambiar el vaor de .id, pero no nos deja agregar una propiedad 
//si definimos un objeto a este le podemos cambiar todas sus propiedades y tambien los valores que este tiene, independiente si lo creamos con const o con let
//si quisieramos que no se le pudieran cambiar las propiedades al objeto, agregando o quitando y que ademas no se puedan cambiar sus valores los creamos con object.freeze, pero si queremos que sus propiedades esten fijas pero su valor pueda cambiar usamos object.seal 
// para crear una funcion constructora basta con hacer una simple funcion, pero esta el nombre que le damos es del recurso que queremos que este cree, si quiero crear usuarios le doy de nombre "Usuarios"
// por comvencion el nombre se usa en UpperCamelCase, tambien llamado PascalCase
// { id: 1, recuperarClave: function(){} }
function Usuario() {
    this.id = 1;
    this.recuperarClave = function(){ //esta funcion ahora se llama "metodo", esta es una funcion que fue asignada a una propiedad de un objeto 
        console.log('recuperando clave...');
    }
}
//si queremos crear un objeto de usuario no basta con solo llamar la funcion 
// let usuario = Usuario();
//console.log(usuario); esto nos tira indefinido

let usuario = new Usuario();//cuando usamos la palabra reservada de "new" ocurren 4 cosas, se crea un objeto literal del aire, luego este objeto se vincula el prototipo de la funcion con el objeto que se acaba de crear, despues este obejto vacio del aire se le asigna la palabra reservada de "this.", si la funcion no retorna nada se retorna automaticamente
console.log(usuario);
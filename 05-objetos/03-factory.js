//factory function, estas nos permiten a nosotros poder crear objetos de una manera facil y no repetitiva
// let user = {
//     id: 1,
//     email: 'chaza700@gmail.com',
//     nombre: 'thomas',
//     activo: true,
//     recuperarClave: function () {
//         console.log('recuperar clave');
//     },
// };
//suponemos que tenemos que crear multiples usuarios y todos tiene cumplir con una estructura similar
// let user1 = {
//     id: 2,
//     email: 'chaza70@gmail.com',
//     nombre: 'alfredo',
//     activo: false,
//     recuperarClave: function () {
//         console.log('recuperar clave');
//     },
// };//si tuvieramos que crear otro usuario tendriamos que ahcer esto devuelta y el codigo seria repetitivo
//aca entran las factory function para no tener un codigo muy repetitivo 
function crearUsuario(nombre, email) {
    return {
        email,
        nombre,
        activo: true,
        recuperarClave: function () {
            console.log('recuperar clave');
        },
    };
}
//para poder usar esta funcion y asi poder crear objetos de usuarios tenemos que hacer lo siguiente
let user1 = crearUsuario('thomas', 'chaza700@gmail.com')
let user2 = crearUsuario('alfredo', 'chaza70@gmail.com')//si queremos crear multiples usuarios lo copiamos y cambiamos los valores
console.log(user1, user2)
//las factory funcution tiene que usar camelCase, generalmente empiezan con crear o create
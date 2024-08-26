let email = 'chaza700@gmail.com';
let name = 'thomas';
let direccion = {
   calle: 'berazategui',
   numero: 11,
};

//podemos usar los objetos para agrupar datos dentro de un mismo objeto, tener objetos dentro de objetos

let user = {
    email: 'chaza700@gmail.com',
    nombre: 'thomas',
    direccion: {
        calle: 'berazategui',
        numero: 11,
    },
    activo: true,//podemos asignar valores o propiedades como los booleanos 
    recuperarClave: function () {
        console.log('recuperando clave...')
    },//tambien podemos colocar una funcion, en este caso es una funcion anonima porque no le puse el nombre, en este caso no ponemos devuelve recuperarClave porque seria redundante 

};


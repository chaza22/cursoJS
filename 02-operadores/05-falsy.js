//short-circuit

// valores que te dan falso, todos estos valores se conocen como falsy
//false
//0
//''
//null
//undefined
//NaN

let nombre = '';
let username = nombre || 'anonimo'; //con || devuelve el primer elemento que evalua en true
console.log(username);
//el operador de && se usa para poder ejecutar funciones siempre y cuando la primera halla evaluado en true

function fn1() {
    console.log('soy funcion 1');
    return false;
}

function fn2() {
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();
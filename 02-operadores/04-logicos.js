// AND, OR, NOT

//AND se hace usando &&

console.log(true && true);//evalua lo que tiene a su izquierda y derecha, para que nos de true los 2 tienen que ser verdaderos, sino con uno solo que no lo sea nos da false 
console.log(true && false);//lo contrario al anterior
//ejemplo de uso real
let mayor = true;
let suscrito = true;
console.log('operador and', mayor && suscrito);

// OR se hace con ||
console.log('operador or', mayor || suscrito);//devuelve true si almenos uno es verdadero, los 2 tienen que ser false para devolver false

//NOT se hace ! antes de la variable
console.log('operador not', !mayor);

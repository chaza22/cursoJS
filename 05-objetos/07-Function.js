//existe un construntor que se llama function y existen otras propiedades que tiene las funciones que nos pueden servir par areutilizar codigo
function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function(){ console.log('Dibujando...'); }
}


//nunca usar este tipo de funcion
// const Point = new Function('x', 'y',`
//     this.x = x;
//     this.y = y;
//     this.dibujar = function(){ console.log('Dibujando...'); }
//     `);

// const p = new Point(1, 2);
// console.log(p);

let punto = { z: 7 };
Punto.call(punto, 1, 2);//el primer argumento es el contexto de "this" este pasa a ser el objeto que le damos a las "{}" y despue le tenemos que indicar los argumentos de la funcion a la cual la estamos llamando con call
//".call" nos permite llamar funciones a las cuales le puedo pasar el contexto de ".this" y asi aumentar los objetos que le estoy pasando 
console.log(punto);
//con esto nosotros podemos reutilizar codigo, sea definiendo un objeto se lo pasamos a otra funcion y esta se va a encargar de exterderlo 
Punto.apply(punto, [1, 2]);
//".apply" hace lo mismo que .call, con la diferencia que todos los argumentos que le pasemos se los tenemos que entregar con la dorma de un array
console.log(punto);
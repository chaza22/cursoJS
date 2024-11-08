const punto = {
    x: 10,
    y:15,
    dibujar() {
        console.log('dibujando');
    }
};
// delete punto.dibujar;
if ('dibujar' in punto) {
    punto.dibujar();
}
//de esta forma podemos verificar si un objeto tiene alguna propiedad o metodo en particular

console.log(Object.keys(punto)); //esto es lo mismo si hacemos let keys = object.keys(punto);
//con esto mismo vamos a poder acceder a listar los valores de todas las propiedades de este objeto
for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
}//con of podemos iterar un array,que en este caso nos lo da "object.keys(punto)"

for (let entry of Object.entries(punto)) {
    console.log(entry);
}//nos da un array con su propiedad y su valor, esto nos sirve para acceder a las propiedades de un objeto cuando nosotros no conocemos sus propiedades 

//cuando el constructor de object tiene metodos como ".keys", ".entries" a estos se los llama metodos de clase o metodos estaticos 
//xd

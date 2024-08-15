//Decimal: 0,1,2,3,4,5,6,7,8,9
//Binario: 0,1
// BIT: 0 1 .un bit es un digito en binario, puede tomar el valor de 0 o de 1
// Byte:8 bits. es la combinacion de 8 bits, aca se pueden almacenar caracteres, simbolos, numeros, o valores numericos 
// Byte: 00000000 .esta es la forma en la que se representa 
// Byte: 00000000 -> 0
// Byte: 00000001 -> 1
// Byte: 00000010 -> 2
// Byte: 00000011 -> 3
// Byte: 00000100 -> 4
// Byte: 00000101 -> 5
// Byte: 00000110 -> 6
// Byte: 00000111 -> 7
// Byte: 00000000 -> 0
// Byte: 00000000 -> 0


// el OR lo que hace es tomar la cadena de bits y crea uno nuevo bit en base a si uno de los 2 digitos contiene un 1 dentro de esa cadena
console.log(1 | 3);// 00000011
console.log(1 | 4);// 00000101
console.log(3 | 5);// 00000111


console.log(1 & 3);// 00000001
console.log(1 & 4);// 00000000
console.log(3 & 5);// 00000001
//cuales son los numeros pares

let i = 2;
/*while (i < 2) {
    if(i % 2 == 0) {
        console.log('numero par', i)
    }
    i++;
}

console.log('fuera del while')
*/
//el do while empieza a evaluar desde el final del loop

do {
    if(i % 2 == 0) {
        console.log('numero par', i)
    }
    i++;
} while(i < 2);
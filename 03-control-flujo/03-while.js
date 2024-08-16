//cuando queremos ejecutar una porcion de codigo mas de una vez tenemos que usar los loops 
//en los loops tenemos el while, do while, for, for in, 
//cuales son los numero pares?

let i = 0;
while (i < 10) {
    if (i % 2 == 0){
        console.log('numero par', i);
    }
    i++;
}
//si la condicion que esta en el parentesis se cumple se ejecutara lo que esta estre las llaves

console.log('fuera del while')
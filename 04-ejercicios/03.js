/**
 * indice validar que no sea menor a cero y quel el elemento exista
 * en el array
 */

function getbyIdx(arr, idx) {
    if (idx < 0) {
        return 'no existe elemento';
    }

    if (arr.length <= idx) {
        return 'no existe elemento';
    }

    return arr[idx];
}

let resultado = getbyIdx( [1, 2], 1);
console.log(resultado);
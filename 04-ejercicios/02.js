/**
 * nombre: ancho x alto 
 * 8K 7680 X 4320
 * 4K 3840 X 2160
 * WQHD 2560 X 1440
 * FHD 1920 X 1080
 * HD 1280 X 720
 */

function nombreResolucion(ancho, alto){
    if (ancho > 7680 && alto > 4320) {
        return 'ES 8K';
    } else if (ancho > 3840 && alto > 2160) {
        return 'ES 4K';
    } else if (ancho > 2560 && alto > 1440) {
        return 'ES WQHD'
    } else if (ancho > 1920 && alto > 1080) {
        return 'ES FHD'
    } else if (ancho > 1280 && alto > 720) {
        return 'ES HD'
    } else {
        return 'FALSE'
    }
}

let nombre = nombreResolucion(1366, 768);
console.log(nombre);
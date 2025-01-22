//Actividad 13
// 1- Haz una función que de dos números pasados por parámetros indica(saca por consola) cúal de ellos es mayor.
function cual_mayor(a = 19, b = 30) {
    let resultado = 0;

    if (a > b) {
        resultado = a;
    }
    else {
        resultado = b;
    }

    return resultado
}
var resultado = cual_mayor(24, 33)
console.log("Este es el resultado de la primera " + resultado)

// 2- Haz una función que calcule(sin usar *) la multiplicación de dos números. 
function multiplicacion_xd(a, b = 1) {
    let multiplicacion = 0

    for(let i = 0; i < b; i++){
        multiplicacion = multiplicacion + a
    }

    return multiplicacion
}
var multiplicacion = multiplicacion_xd(a = 2, b = 12)
console.log("Este es el resultado de la segunda " + multiplicacion)

// 3- Utilizando la función anterior haz una función que calcule la multiplicación de 3 números.
function multiplicacion_xd_V2(a, b = 1, c = 1) {
    let multiplicacion_V2 = 0

    for(let i = 0; i < b; i++){
        multiplicacion_V2 = multiplicacion_V2 + a
    }
    let valor = multiplicacion_V2; 

    for(let i = 0; i < c - 1; i++){
        multiplicacion_V2 = multiplicacion_V2 + valor
    }

    return multiplicacion_V2
}
var multiplicacionV2 = multiplicacion_xd_V2(a = 2, b = 12, c = 2)
console.log("Este es el resultado de la tercera " + multiplicacionV2)

// 4- Crea una función que permita calcular la nota media de 3 notas para que devuelva la media con 1 decimal.

// 5- Encuentra entre los primeros 10.000 números naturales los números que completan la siguiente propiedad: La suma del cubo de cada una de sus cifras y que dé el mismo número:→ por ejemplo 153: 1 * 1 * 1 + 5 * 5 * 5 + 3 * 3 * 3= 1³+5³+3³=153.

// 6- (optativo) Crea una función que devuelva el cubo(numero ^ 3) de un número pero que compruebe si el parámetro pasado es un número entero.Si no es un entero o no es un número mostrará un alert indicando cuál es el problema y devolverá false.

//Actividades 16


//Actividades 20 


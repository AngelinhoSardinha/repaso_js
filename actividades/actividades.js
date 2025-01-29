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

    for (let i = 0; i < b; i++) {
        multiplicacion = multiplicacion + a
    }

    return multiplicacion
}
var multiplicacion = multiplicacion_xd(a = 2, b = 12)
console.log("Este es el resultado de la segunda " + multiplicacion)

// 3- Utilizando la función anterior haz una función que calcule la multiplicación de 3 números.
function multiplicacion_xd_V2(a, b = 1, c = 1) {
    let multiplicacion_V2 = 0

    for (let i = 0; i < b; i++) {
        multiplicacion_V2 = multiplicacion_V2 + a
    }
    let valor = multiplicacion_V2;

    for (let i = 0; i < c - 1; i++) {
        multiplicacion_V2 = multiplicacion_V2 + valor
    }

    return multiplicacion_V2
}
var multiplicacionV2 = multiplicacion_xd_V2(a = 2, b = 12, c = 2)
console.log("Este es el resultado de la tercera " + multiplicacionV2)

// 4- Crea una función que permita calcular la nota media de 3 notas para que devuelva la media con 1 decimal.
function media(a, b, c) {
    let resultado = 0

    resultado = (a + b + c) / 3

    return resultado
}
var media = media(a = 10.0, b = 7.3, c = 8.5)
console.log("Este es el resultado de la cuarta " + media)

// 5- Encuentra entre los primeros 10.000 números naturales los números que completan la siguiente propiedad: La suma del cubo de cada una de sus cifras y que dé el mismo número:→ por ejemplo 153: 1 * 1 * 1 + 5 * 5 * 5 + 3 * 3 * 3= 1³+5³+3³=153.
function propiedad_rara() {
    for (let i = 0; i <= 10000; i++) {
        let numerito = i.toString();
        let sumita = 0;

        for (let j = 0; j < numerito.length; j++) {
            sumita += multiplicacion_xd_V2(parseInt(numerito[j]), parseInt(numerito[j]), parseInt(numerito[j]));
        }
        if (sumita === i) {
            console.log(i);
        }
    }
}
propiedad_rara()

// 6- (optativo) Crea una función que devuelva el cubo(numero ^ 3) de un número pero que compruebe si el parámetro pasado es un número entero.Si no es un entero o no es un número mostrará un alert indicando cuál es el problema y devolverá false.

//Actividades 16
//1- Comprueba si un string contiene el substring 'As' al principio. Si lo contiene, devuelve el string original. Sino, devuelve el string con 'As' concatenado al principio de este.
function concatenar(palabra = String) {
    var nuevaPalabra = palabra.toLowerCase();

    if (nuevaPalabra.startsWith("as")) {
        return palabra
    }
    else return "As" + palabra
}
var palabra = concatenar("Asteroido")
console.log("Esta respuesta de es strings uno " + palabra)

// 2- Introduce un string y un número, comprueba que es menor que la longitud del string en una función. La función debe devolver el string sin el carácter en esa posición.
function eliminaCarracterPosicion(palabra = String, a) {
    let nuevaPalabra = palabra;

    if (a < palabra.length) {
        return palabra.slice(0, a - 1) + palabra.slice(a);
    }
    else {
        return "No se puede realizar la operacion";
    }
}
var palabras = eliminaCarracterPosicion("murcielago", 3);
console.log("Este es el resultado del ejercicio de string 2 " + palabras);
var palabras = eliminaCarracterPosicion("murcielago", 22);
console.log("Este es el resultado del ejercicio de string 2 " + palabras);

// 3- Dado un string intercambia la posición del primer y último carácter del string. Tienes que comprobar que el string tiene longitud mayor que 0.
function intercambioPosi(palabra) {
    if (palabra.length > 0) {
        return palabra.slice(-1) + palabra.slice(1, 1 - 1) + palabra.slice(0, 1);
    }
    else {
        return "No se puede hacer esto";
    }
}
console.log(intercambioPosi("Pingilin"));

//Actividades 20 
//Programa la función separarVocalesDeConsonantes() que partiendo de una cadena de entrada, la trabaje y retorne una cadena que tenga todas las vocales y luego las constantes (en el mismo orden en el que aparecen).

//Antes de ponerte a “picar”, escribe en el mismo fichero que vas a hacer la codificación cómo vas a resolver el problema (en lenguaje humano). Piensa cuando vas a saber si tu programa funciona o no, define bajo qué circunstancias vas a saber que todo está ok. 

//Escribe las llamadas que vas a hacer y los resultados que esperas.
function separarVocalesDeConsonantes(texto) {
    var vocales = "";
    var consonantes = "";
    for (var i = 0; i < texto.length; i++) {
        if (texto[i].match(/[aeiou]/)) {
            vocales += texto[i];
        }
        else {
            consonantes += texto[i];
        }
    }
    var resultado = vocales + consonantes;
    return resultado
}
console.log(separarVocalesDeConsonantes("murcielago"));

//Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números pares en la lista. La función deberá iterar sobre cada número en la lista, comprobar si el número es par y, si es así, añadirlo a la suma total.//Actividad 13
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
function media(a, b, c) {
    let resultado = 0

    resultado = (a + b + c)/3

    return resultado
}
//var media = media(a = 10.0, b = 7.3, c = 8.5)
//console.log("Este es el resultado de la cuarta " + media)

// 5- Encuentra entre los primeros 10.000 números naturales los números que completan la siguiente propiedad: La suma del cubo de cada una de sus cifras y que dé el mismo número:→ por ejemplo 153: 1 * 1 * 1 + 5 * 5 * 5 + 3 * 3 * 3= 1³+5³+3³=153.
function propiedad_rara() {
    for(let i = 0; i <= 10000; i++){
        let numerito = i.toString();
        let sumita = 0; 

        for(let j = 0; j < numerito.length; j++){
            sumita += multiplicacion_xd_V2(parseInt(numerito[j]), parseInt(numerito[j]), parseInt(numerito[j]));
        }
        if(sumita === i){
            console.log(i);
        }
    }
}
propiedad_rara()

// 6- (optativo) Crea una función que devuelva el cubo(numero ^ 3) de un número pero que compruebe si el parámetro pasado es un número entero.Si no es un entero o no es un número mostrará un alert indicando cuál es el problema y devolverá false.

//Actividades 16
//1- Comprueba si un string contiene el substring 'As' al principio. Si lo contiene, devuelve el string original. Sino, devuelve el string con 'As' concatenado al principio de este.
function concatenar(palabra = String) {
    var nuevaPalabra = palabra.toLowerCase();

    if(nuevaPalabra.startsWith("as")){
        return palabra
    }
    else return "As" + palabra
}
var palabra = concatenar("Asteroido")
console.log("Esta respuesta de es strings uno " + palabra)

// 2- Introduce un string y un número, comprueba que es menor que la longitud del string en una función. La función debe devolver el string sin el carácter en esa posición.
function eliminaCarracterPosicion(palabra = String, a) {
    let nuevaPalabra = palabra;

    if(a < palabra.length){
        return palabra.slice(0, a - 1) + palabra.slice(a);
    }
    else {
        return "No se puede realizar la operacion";
    }
}
var palabras = eliminaCarracterPosicion("murcielago", 3);
console.log("Este es el resultado del ejercicio de string 2 " + palabras);
var palabras = eliminaCarracterPosicion("murcielago", 22);
console.log("Este es el resultado del ejercicio de string 2 " + palabras);

// 3- Dado un string intercambia la posición del primer y último carácter del string. Tienes que comprobar que el string tiene longitud mayor que 0.
function intercambioPosi(palabra) {
    if(palabra.length > 0){
        return palabra.slice(-1) + palabra.slice(1, 1 - 1) + palabra.slice(0, 1);
    }
    else {
        return "No se puede hacer esto";
    }
}
console.log(intercambioPosi("Pingilin"));

//Actividades 20 
//Programa la función separarVocalesDeConsonantes() que partiendo de una cadena de entrada, la trabaje y retorne una cadena que tenga todas las vocales y luego las constantes (en el mismo orden en el que aparecen).

//Antes de ponerte a “picar”, escribe en el mismo fichero que vas a hacer la codificación cómo vas a resolver el problema (en lenguaje humano). Piensa cuando vas a saber si tu programa funciona o no, define bajo qué circunstancias vas a saber que todo está ok. 

//Escribe las llamadas que vas a hacer y los resultados que esperas.
function separarVocalesDeConsonantes(texto){
    var vocales = "";
    var consonantes = "";
    for(var i = 0; i < texto.length; i++){
        if(texto[i].match(/[aeiou]/)){
            vocales += texto[i];
        }
        else{
            consonantes += texto[i];
        }
    }
    var resultado = vocales + consonantes;
    return resultado
}
console.log(separarVocalesDeConsonantes("murcielago"));

//Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números pares en la lista. La función deberá iterar sobre cada número en la lista, comprobar si el número es par y, si es así, añadirlo a la suma total.
function sumarPares(lista){
    let suma = 0; 
    for(let elemento of lista) {
        if(elemento%2 === 0) {
            suma = suma + elemento
        }
    }
    return suma
}
console.log(sumarPares([2,4,5,6,7,8,3,1,10,4]));

//Recibimos un array con los datos del alumno, pero debemos ordenarlo. En lugar de tener al final el nombre del alumno lo queremos al principio, antes del apellido y queremos añadir al final la nota media. De tal manera que: 
function ordenDatos(array) {
    let moo = array.sort()
    return moo.reverse()

    
}
console.log(ordenDatos(["Rodriguez", "8", 9, '5',4, 'Clara']));

// Partiendo de un array con palabras aleatorias, pero nuestro programa no acepta palabras que empiezan por “Z”. Elimina estas palabras del array y devuelve el nuevo sin estas palabras.
function filterWords(array) {
    let z = 'Z'; 
    for(let element in array) {
        if(array[element].toUpperCase().startsWith(z)) {
            array[element] = "xxx"
        }
    }
    return array
}
console.log(filterWords(["Bob", "Alex", "Zoello"]));
console.log(filterWords(["León", "Zebra", "Gacela"]));
console.log(filterWords(["Mercedes", "Bmw", "Audi", "Porche"]));
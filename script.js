document.getElementById("ejercicio1").addEventListener('click', function(){
    var numeros = [];

    function solicitarNumeros() {
        var numero = prompt("Ingrese un numero o si desea finalizar escriba 'fin': ");

        if (numero.toLowerCase() === "fin") {
            if (numero.length > 0) {
                var maximo = Math.max(...numeros);

                alert("El numero mas grande de los ingresados es " + maximo);
            }
            else {
                alert("No se ingresaron numeros, por favor, inegrese uno.");
            }
        }
        else {
            numero = parseFloat(numero);
            if (!isNaN(numero)) {
                numeros.push(numero);
                solicitarNumeros();
            }
            else {
                alert("Ingresa un número válido o escribe 'fin' para detener el ingreso de números");
            }
        }
    }

    solicitarNumeros();
});

document.getElementById("ejercicio2").addEventListener('click', function() {
    var palabra = prompt("Ingresa una palabra o frase: ");

    var palabraSinEspacios = palabra.replace(/\s/g, "").toLowerCase();

    var palabraAlReves = palabraSinEspacios.split("").reverse().join("");

    if (palabraSinEspacios === palabraAlReves) {
        alert("'" + palabra + "' es un palindromo.");
    }
    else{
        alert("'" + palabra + "' no es un palindromo");
    }
});

function calcularSumaDigitos(numero) {
    let suma = 0;
    while (numero > 0) {
        suma += numero % 10;
        numero = Math.floor(numero/10);
    }
    return suma;
}

document.getElementById("ejercicio3").addEventListener('click', function() {
    const numeroIngresado = prompt("Ingrese un numero para calcular la suma de sus digitos: ");
    const numero = parseInt(numeroIngresado);

    if(!isNaN(numero)) {
        const sumaDigitos = calcularSumaDigitos(numero);
        alert("La suma de los digitos de " + numero + " es de: " + sumaDigitos);
    }
    else{
        alert("Por favor, ingrese un numero valido");
    }
});

function generarNumAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('ejercicio4').addEventListener('click', function() {
    const min = parseInt(prompt("Ingrese el valor minimo o mas chico del rango: "));
    const max = parseInt(prompt("Ingrese el valor maximo o mas grande del rango: "));

    if(!isNaN(min) && !isNaN(max) && min < max) {
        const numeroAleatorio = generarNumAleatorio(min, max);
        alert("Un numero aleatorio entre " + min + " y " + max + " es: " + numeroAleatorio);
    }
    else {
        alert("Por favor, ingrese un rango valido");
    }
});

function generarSecuenciaFibonacci(numero) {
    const secuencia = [0,1];

    while(secuencia[secuencia.length -1] + secuencia[secuencia.length - 2] <= numero) {
        secuencia.push(secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2]);
    }
    return secuencia;
}

document.getElementById("ejercicio5").addEventListener('click', function() {
    const numeroIngresado = prompt("Ingrese un numero para generar la secuencia Fibonacci: ");
    const numero = parseInt(numeroIngresado);

    if(!isNaN(numero) && numero >= 0) {
        const secuenciaFibonacci = generarSecuenciaFibonacci(numero);
        alert("La secuencia Fibonaccio hasta el " + numero + " es: " + secuenciaFibonacci.join(','));
    }
    else {
        alert("Por favor, ingrese un numero valido.");
    }
})
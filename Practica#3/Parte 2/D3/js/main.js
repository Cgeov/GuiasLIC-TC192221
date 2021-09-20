var table = document.getElementById("table");
var senti = document.getElementById("sentido");
var again = document.getElementById("again");

var numeros = [];
var ordenados = [];

function llenar_Arreglo(n) {
    for (var i = 0; i < n; i++) {
        numeros.push(Math.floor((Math.random() * 99) + 1));
    }
}

function ordenar(sentido) {
    var aux = 0,
        k = 0,
        i = 0,
        n = numeros.length;
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (numeros[i] > numeros[i + 1]) {
                aux = numeros[i];
                numeros[i] = numeros[i + 1];
                numeros[i + 1] = aux;
            }
        }
    }
    if (sentido) {
        for (i = (numeros.length - 1); i >= 0; i--) {
            ordenados.push(numeros[i]);
        }
        senti.innerHTML="Método: Descendente";
    } else {
        ordenados = numeros;
        senti.innerHTML="Método: Ascendente";
    }
    llenar_Tabla();
}

function llenar_Tabla() {
    table.innerHTML = "";
    ordenados.forEach(num => {
        let p = document.createElement("p");
        p.innerHTML = num;
        let cell = document.createElement("div");
        cell.className = "cells";
        cell.appendChild(p);
        table.appendChild(cell);
    });
}

function isNumeric(text) {
    var regex = /^[0-9]+$/;
    if (regex.test(text)) {
        return true;
    } else {
        return false;
    }
}

function initial(){
    numeros=[];
    ordenados=[];
    var resp = "",
        n = 0,
        sentido = true;
    do {
        resp = prompt("Ingrese el sentido del ordenamiento (ascendente o descendente)");
        if (resp != "ascendente" && resp != "descendente") {
            alert("Ingrese una respuesta válida");
        }
    } while (resp != "ascendente" && resp != "descendente");
    if (resp == "ascendente") {
        sentido = false;
    }
    do {
        n = prompt("Ingrese el tamaño del arreglo (sololo números enteros de 0 a 100)");
        if (!isNumeric(n)) {
            alert("Ingrese un número válido");
        } else if (n < 0 || n > 100) {
            alert("Ingrese un número válido");
        }
    } while (!isNumeric(n) || (n < 0 || n > 100));
    llenar_Arreglo(n);
    ordenar(sentido);
    llenar_Tabla();
}

again.addEventListener("click",initial);

window.onload = initial;
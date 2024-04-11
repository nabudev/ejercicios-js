function contarLetrasA(frase) {
    var contador = 0;
    for (var i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === 'a') {
            contador++;
        }
    }
    return contador;
}
window.onload = function() {
    var frase = prompt("Por favor, ingresa una frase:");
    var cantidadA = contarLetrasA(frase);
    alert("La cantidad de letras 'a' en la frase es: " + cantidadA);
};
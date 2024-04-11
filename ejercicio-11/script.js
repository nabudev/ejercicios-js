function contarLetrasA(frase) {
    var contador= 0;
    for (var i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === 'a') {
            contador++;
        }
        else if (frase[i].toLowerCase() === 'e') {
            contador++;
        }
        else if (frase[i].toLowerCase() === 'i') {
            contador++;
        }
        else if (frase[i].toLowerCase() === 'o') {
            contador++;
        }
        else if (frase[i].toLowerCase() === 'u') {
            contador++;
        }
        else{
        }
    }
    return contador;
}
window.onload = function() {
    var frase = prompt("Por favor, ingresa una frase:");
    var cantidadVocales = contarLetrasA(frase);
    alert("La suma de vocales encontradas son: " + cantidadVocales);  
};

function contarLetrasA(frase) {
    for (var i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === 'a') {
            contadorA= alert("a");
        }
        else if (frase[i].toLowerCase() === 'e') {
            contadorE= alert("e");
        }
        else if (frase[i].toLowerCase() === 'i') {
            contadorI= alert("i");
        }
        else if (frase[i].toLowerCase() === 'o') {
            contadorO= alert("o");
        }
        else if (frase[i].toLowerCase() === 'u') {
            contadorO= alert("u");
        }
        else{
        }
    }
}
window.onload = function() {
    var frase = prompt("Por favor, ingresa una frase:");
    var contadorA = contarLetrasA(frase);
    alert("La vocales encontradas son: " + contadorA,  contadorE, contadorI, contadorO, contadorU);    
};

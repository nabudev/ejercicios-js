function contarVocales(frase) {
    
    frase = frase.toLowerCase();
    
    var contadorA = 0;
    var contadorE = 0;
    var contadorI = 0;
    var contadorO = 0;
    var contadorU = 0;

    
    for (var i = 0; i < frase.length; i++) {
        var letra = frase.charAt(i);
        switch (letra) {
            case 'a':
                contadorA++;
                break;
            case 'e':
                contadorE++;
                break;
            case 'i':
                contadorI++;
                break;
            case 'o':
                contadorO++;
                break;
            case 'u':
                contadorU++;
                break;
            default:
                
                break;
        }
    }


    return {
        'a': contadorA,
        'e': contadorE,
        'i': contadorI,
        'o': contadorO,
        'u': contadorU
    };
}


var frase = prompt("Ingresa una frase:");
var resultado = contarVocales(frase);
alert("A: " + resultado['a']);
alert("E: " + resultado['e']);
alert("I: " + resultado['i']);
alert("O: " + resultado['o']);
alert("U: " + resultado['u']);

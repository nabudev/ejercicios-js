    function calcularLetraDNI(numero) {
        const letrasDNI = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const resto = numero % 23;
        return letrasDNI.charAt(resto);
    }
    function esNumeroValido(numero) {
        return !isNaN(numero) && numero >= 0 && numero <= 99999999;
    }

    while (true) {
        let input = prompt("Ingresa tu número de DNI:");

        if (input === null || input === "") {
            break;
        }
        let numeroDNI = parseInt(input);

        if (!esNumeroValido(numeroDNI)) {
            alert("Ingresa un número de DNI válido.");
            continue; 
        }
        let letraDNI = calcularLetraDNI(numeroDNI);

        alert(`La letra de tu DNI (${numeroDNI}) es: ${letraDNI}`);
    }

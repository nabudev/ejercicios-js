const numero = parseInt(prompt("Por favor, ingresa un número para la pirámide inversa:"));
if (isNaN(numero) || numero <= 0) {
    alert("Por favor, ingresa un número válido mayor que cero.");
} else {
    for (let i = numero; i >= 1; i--) {
        let linea = "";
        for (let j = 0; j < i; j++) {
            linea += i;
        }
        alert(linea);
    }
}

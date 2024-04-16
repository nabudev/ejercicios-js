const edad = prompt("Por favor, ingresa tu edad:");
const edadNumero = parseInt(edad);

if (edadNumero >= 18) {
    alert("Podes conducir.");
} else {
    alert("No podes manejar, sos menor.");
}

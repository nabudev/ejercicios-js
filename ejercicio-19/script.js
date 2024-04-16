const nota = prompt("Por favor, ingresa tu nota:");
const notaNumero = parseFloat(nota);

let calificacion;
if (notaNumero >= 0 && notaNumero < 3) {
    calificacion = "Muy deficiente";
} else if (notaNumero >= 3 && notaNumero < 5) {
    calificacion = "Insuficiente";
} else if (notaNumero >= 5 && notaNumero < 6) {
    calificacion = "Suficiente";
} else if (notaNumero >= 6 && notaNumero < 7) {
    calificacion = "Bien";
} else if (notaNumero >= 7 && notaNumero < 9) {
    calificacion = "Notable";
} else if (notaNumero >= 9 && notaNumero <= 10) {
    calificacion = "Sobresaliente";
} else {
    calificacion = "Ingresa una nota entre 0 y 10.";
}
alert(`Tu calificación es: ${calificacion}`);

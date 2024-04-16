let sumaTotal = 0;
while (true) {
    let input = prompt("Ingresa un número (o presiona cancelar para terminar):");

    if (input === null || input === "") {
        break; 
    }
    let numero = parseFloat(input);

    if (isNaN(numero)) {
        alert("Solo se permite ingresar un número válido.");
        continue; 
    }
    sumaTotal += numero;
}

alert(`La suma total de los números ingresados es: ${sumaTotal}`);

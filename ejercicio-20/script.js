let cadenas = [];

while (true) {
    let cadena = prompt("Ingresa una cadena de texto (o presiona cancelar para terminar):");
  
    if (cadena === null || cadena === "") {
        break; 
    }
    cadenas.push(cadena); 
}

const cadenaConcatenada = cadenas.join("-");

alert(`Texto/s ingresados: ${cadenaConcatenada}`);

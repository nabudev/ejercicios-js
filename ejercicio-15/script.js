function encontrarDivisores(numero) {
    let divisores = [];
    
    for (let i = 1; i <= numero; i++) {
     
        if (numero % i === 0) {
            divisores.push(i);
        }
    }
    return divisores;
}

const numeroDado = 10;
const divisores = encontrarDivisores(numeroDado);

console.log(`Los divisores de ${numeroDado} son: ${divisores.join(', ')}`);

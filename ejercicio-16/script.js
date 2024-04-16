function encontrarDivisores(numero) {
    let divisores = [];

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }
    return divisores;
}

function encontrarDivisoresComunes(numero1, numero2) {
    const divisoresNumero1 = encontrarDivisores(numero1);
    const divisoresNumero2 = encontrarDivisores(numero2);
    const divisoresComunes = [];
    
    for (const divisor of divisoresNumero1) {
        if (divisoresNumero2.includes(divisor)) {
            divisoresComunes.push(divisor);
        }
    }
    
    return divisoresComunes;
}

const numero1 = 10;
const numero2 = 24;
const divisoresComunes = encontrarDivisoresComunes(numero1, numero2);

console.log(`Los divisores comunes de ${numero1} y ${numero2} son: ${divisoresComunes.join(', ')}`);

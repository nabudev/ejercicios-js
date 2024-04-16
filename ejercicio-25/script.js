function esMultiplo(numero, divisor) {
    return numero % divisor === 0;
}
for (let i = 1; i <= 500; i++) {
    console.log(i);
    if (esMultiplo(i, 4)) {
        console.log(`${i} (Múltiplo de 4)`);
    }
    if (esMultiplo(i, 9)) {
        console.log(`${i} (Múltiplo de 9)`);
    }
    if (i % 5 === 0 && i < 500) {
        console.log("————————————————————");
    }
}

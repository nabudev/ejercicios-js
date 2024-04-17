function esMultiplo(numero, divisor) {
    return numero % divisor === 0;
}
for (let i = 1; i <= 500; i++) {
    let mensaje = '';
    if (esMultiplo(i, 4)) {
        mensaje += `(Múltiplo de 4)`;
    }
    if (esMultiplo(i, 9)) {
        mensaje += `(Múltiplo de 9)`;
    }
    if (mensaje !== '') {
        console.log(`${i} ${mensaje}`);
    } else {
        console.log(i);
    }
    if (i % 5 === 0 && i < 500) {
        console.log("————————————————————");
    }
}

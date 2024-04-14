function esDivisible(numero, divisor) {
    return numero % divisor === 0;
  }
  
  function verificarDivisibilidad(numero) {
    if (esDivisible(numero, 2)) {
      alert(numero + " es divisible por 2");
    }
  
    if (esDivisible(numero, 3)) {
      alert(numero + " es divisible por 3");
    }
  
    if (esDivisible(numero, 5)) {
      alert(numero + " es divisible por 5");
    }
  
    if (esDivisible(numero, 7)) {
      alert(numero + " es divisible por 7");
    }
  };

  var numero = parseInt(prompt("Ingrese un número: "));
  
resultado= verificarDivisibilidad(numero);
alert(resultado);
  
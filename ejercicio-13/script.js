function divisiblePor(numero){
    if (numero %2==0){
        return "Es divisible por 2";
    }
    else if(numero %3==0){
        return "Es divisible por 3";
    }
    else if(numero %5==0){
        return "Es divisible por 5";
    }
    else if(numero %7==0){
        return "Es divisible por 7";
    };
};

var numero = parseInt(prompt("Ingrese un numero: "));
var resultado = divisiblePor(numero);
alert(resultado);
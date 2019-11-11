MathUtils = function(){};


MathUtils.prototype.first = function(number1, number2) {
    // Check if is ímpar
    if(number1 & 1 || number2 & 1){    
        let resultado = number1 * number2;
        if(resultado > 10) {
            throw new Error(resultado + " 2 verdadeiros")
            console.info(resultado + " 2 verdadeiros")
        }else {
            resultado = resultado + 10;
            console.info(resultado + " 1 verdadeiro, 1 falso");
            throw new Error(resultado + " 1 verdadeiro, 1 falso");
        }
    }else {
        resultado = number1 + number2;

        if(resultado > 5) {
            resultado = resultado + 5;
            console.info(resultado + " 1 falso, 1 verdadeiro");
            throw new Error(resultado + " 1 falso, 1 verdadeiro");
        }else {
            console.info(resultado + " 2 falsos");
            throw new Error(resultado + " 2 falsos");
        }
    }
}

MathUtils.prototype.second = function(lados, lado1, lado2, lado3) {
    if(lados == 3) {
        let tipo = (lado1 === lado2 && lado2 === lado3) && 'equilateral' ||
        (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) && 'isosceles' ||
        'scalene';
        console.info("É triangulo")
        let perimetro = lado1 + lado2 + lado3;
        console.info(perimetro);
    }else {
        if(lados == 4) {
            if(lado1 == lado2 == lado3) {
                console.info("É quadrado");
                let perimetro = lado1 + lado2 + lado3;
                console.info(perimetro);
            }else {
                console.info("Tem quatro lados");
                let perimetro = lado1 + lado2 + lado3;
                console.info(perimetro);
            }
        }else {
            console.info("Tem " + lados + " lados")
            let perimetro = lado1 + lado2 + lado3;
            console.info(perimetro);
        }
    }
}

MathUtils.prototype.third = function(angulo) {
    if(angulo > 90) {
        angulo = Math.sin(angulo);
        console.info(angulo);
    }else {
        angulo = Math.cos(angulo);
        console.info(angulo);
    }
    if(Math.tan(angulo) < 1 || Math.tan(angulo) > 1) {
        console.info(Math.tan(angulo))
    }
}
MathUtils = function(){};

MathUtils.prototype.sum = function(number1,number2){
    return number1+number2;
}

MathUtils.prototype.minus = function(number1,number2){
    return number1-number2;
}

MathUtils.prototype.multiply = function(number1, number2) {
    return number1 * number2;
}
 
MathUtils.prototype.divide = function(number1, number2) {
    return number1 / number2;
}
 
MathUtils.prototype.average = function(number1, number2) {
    return (number1 + number2) / 2;
}
 
MathUtils.prototype.factorial = function(number) {
    if (number < 0) {
        throw new Error("There is no factorial for negative numbers");
    } else if (number == 1 || number == 0) {
        return 1;
    } else {
        return number * this.factorial(number - 1);
    }
}


MathUtils.prototype.first = function(number1, number2) {
    // Check if is ímpar
    if(number1 & 1 || number2 & 1){    
        let resultado = number1 * number2;
        if(resultado > 10) {
            throw new Error(resultado + " 2 verdadeiros")
        }else {
            resultado = resultado + 10;
            throw new Error(resultado + " 1 verdadeiro, 1 falso");
        }
    }else {
        resultado = number1 + number2;

        if(resultado > 5) {
            resultado = resultado + 5;
            throw new Error(resultado + " 1 falso, 1 verdadeiro");
        }else {
            throw new Error(resultado + " 2 falsos");
        }
    }
}

MathUtils.prototype.second = function(lados, lado1, lado2, lado3) {
    if(lados == 3) {
        let tipo = (lado1 === lado2 && lado2 === lado3) && 'equilateral' ||
        (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) && 'isosceles' ||
        'scalene';
        console.log("É triangulo")
        let perimetro = lado1 + lado2 + lado3;
        console.log(perimetro);
    }else {
        if(lados == 4) {
            if(lado1 == lado2 == lado3) {
                console.log("É quadrado");
                let perimetro = lado1 + lado2 + lado3;
                console.log(perimetro);
            }else {
                console.log("Tem quatro lados");
                let perimetro = lado1 + lado2 + lado3;
                console.log(perimetro);
            }
        }else {
            console.log("Tem " + lados + " lados")
            let perimetro = lado1 + lado2 + lado3;
            console.log(perimetro);
        }
    }
}

MathUtils.prototype.third = function(angulo) {
    if(angulo > 90) {
        angulo = Math.sin(angulo);
        console.log(angulo);
    }else {
        angulo = Math.cos(angulo);
        console.log(angulo);
    }
    if(Math.tan(angulo) < 1 || Math.tan(angulo) > 1) {
        console.log(Math.tan(angulo))
    }
}
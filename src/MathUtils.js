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
    if(number1/2 == 1 || number2/2 == 1){    
        let resultado = number1 * number2;
        if(resultado > 10) {
            console.log(resultado)
        }else {
            resultado = resultado + 10;
            console.log(resultado);
        }
    }else {
        resultado = number1 + number2;

        if(resultado > 5) {
            resultado = resultado + 5;
            console.log(resultado)
        }else {
            console.log(resultado)
        }
    }
}


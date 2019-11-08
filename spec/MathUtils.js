describe("Todos", function() {
    var calc;
 
    //This will be called before running each spec
    beforeEach(function() {
        calc = new MathUtils();
        spyOn(calc,'sum')
        // spyOn(calc,'first')
        spyOn(calc,'second')
        spyOn(window.console, 'log');
    });
 
    describe("Exercícios Testes", function(){
         
        // Spec for sum operation
        // it("should be able to calculate sum of 3 and 5", function() {
        //      //call any method
        //      calc.sum(3,5);
        //     // verify it got executed
        //     expect(calc.sum).toHaveBeenCalled();
        //     expect(calc.sum).toHaveBeenCalledWith(3,5);
        // });
        
        // // Spec for minus operation
        // it("should be able to calculate minus of 10 and 5",function(){
        //     expect(calc.minus(10,5)).toEqual(5);
        // });
 
        // // Spec for multiply operation
        // it("should be able to multiply 10 and 40", function() {
        //     expect(calc.multiply(10, 40)).toEqual(400);
        // });
 
        // // Spec for factorial operation for positive number
        // it("should be able to calculate factorial of 9", function() {
        //     expect(calc.factorial(9)).toEqual(362880);
        // });
         
        // // Spec for factorial operation for negative number
        // it("should be able to throw error in factorial operation when the number is negative", function() {
        //     expect(function() {
        //         calc.factorial(-7)
        //     }).toThrowError(Error);
        // });

        it("Should throw an error", function() {
            //call any method
        //     calc.first(3,5);
        //    // verify it got executed
        //    expect(calc.first).toHaveBeenCalled();
        //    expect(calc.first).toHaveBeenCalledWith(3,5);

            expect(function() {
                calc.first(5, 5)
            }).toThrowError(Error);
       });

       it("should be able to calculate triangle of 3 and 5", function() {
             //call any method
             calc.second(3,5,4,6);
            // verify it got executed
            expect(calc.second).toHaveBeenCalled();
            expect(calc.second).toHaveBeenCalledWith(3,5,4,6);
        });

       it("should be able to pass with 90", function() {
             //call any method
             calc.second(90);
            // verify it got executed
            expect(calc.second).toHaveBeenCalled();
            expect(calc.second).toHaveBeenCalledWith(90);
        });
         
    });
});
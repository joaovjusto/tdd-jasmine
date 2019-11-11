describe("Todos", function() {
    var calc;
 
    //This will be called before running each spec
    beforeEach(function() {
        calc = new MathUtils();
        // spyOn(calc,'first')
        spyOn(calc,'second')
        spyOn(calc,'third')
        spyOn(window.console, 'log');
    });
 
    describe("Exercícios Testes", function(){

        it("Should throw an error", function() {

            expect(function() {
                calc.first(4, 4)
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
             calc.third(90);
            // verify it got executed
            expect(calc.third).toHaveBeenCalled();
            expect(calc.third).toHaveBeenCalledWith(90);
        });
         
    });
});
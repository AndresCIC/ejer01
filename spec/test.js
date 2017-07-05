var miModulo = require('../index.js');


describe("A suite", function() {
  it("contains spec with an expectation", function() {
    resultado = miModulo.sumar(4,5);
	expect(resultado).toBe(9);
  });
});



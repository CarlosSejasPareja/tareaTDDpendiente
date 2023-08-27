import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("el 4 deberia considerarse como anio bisiesto", () => {
    expect(esBisiesto(4)).toEqual(true);
  });

  it("el 5 no deberia considerarse como anio bisiesto", () => {

    expect(esBisiesto(5)).toEqual(false);
  });
});

 
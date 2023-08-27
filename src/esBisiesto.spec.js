import anio from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("el 4 deberia considerarse como anio bisiesto", () => {
    expect(anioBisiesto(4)).toEqual(true);
  });

  it("el 5 no deberia considerarse como anio bisiesto", () => {
    expect(anioBisiesto(5)).toEqual(false);
  });

  it("es bisiesto si es divisible entre 400", () => {
    expect(anioBisiesto(400)).toEqual(true);
  });

  

});

function anioBisiesto(a){
    return new anio (a).esBisiesto();
}

 
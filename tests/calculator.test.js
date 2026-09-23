const { addition, calculerTTC } = require("../src/services/calculator");

describe("Service calculator", () => {
  test("additionne deux nombres", () => {
    expect(addition(2, 3)).toBe(5);
  });

  test("calcule un prix TTC avec 20 % de TVA", () => {
    expect(calculerTTC(100, 20)).toBe(120);
  });

  test("gère les décimales", () => {
    expect(calculerTTC(99.99, 20)).toBe(119.99);
  });

  test("refuse un prix négatif", () => {
    expect(() => calculerTTC(-10, 20)).toThrow();
  });
});

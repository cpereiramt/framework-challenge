const divisiblesAndPrimesByNumber = require("../Math/divisiblesAndPrimesNumber");

describe("divisiblesAndPrimesByNumber", () => {
  it("should return an object of with divisibles and primes of a given number", () => {
    expect(divisiblesAndPrimesByNumber(45)).toEqual({
      inputedNumber: 45,
      divisibles: [1, 3, 5, 9, 15, 45],
      primeDivisibles: [1, 3, 5],
    });
  });
});

const calculationsFunctions = require("./PrimeNumber");

const calculateDivisiblesByNumber = (number) => {
  let divisibles = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisibles.push(i);
    }
  }
  const primeDivisibles =
    calculationsFunctions.findPrimeNumbersFromArray(divisibles);
  return { divisibles: divisibles, primeDivisibles: primeDivisibles };
};

module.exports = calculateDivisiblesByNumber;

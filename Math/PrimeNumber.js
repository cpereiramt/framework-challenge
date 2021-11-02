const isPrimeNumber = (number) => {
  if (number === 1) {
    return true;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const findPrimeNumbersFromArray = (array) => {
  let primeNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (isPrimeNumber(array[i])) {
      primeNumbers.push(array[i]);
    }
  }
  return primeNumbers;
};

module.exports = {
  isPrimeNumber,
  findPrimeNumbersFromArray,
};

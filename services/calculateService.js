const divisiblesAndPrimesByNumber = require("../Math/divisiblesAndPrimesNumber");

const calculateService = (value) => {
  const number = Number.parseInt(value);
  if (Number.isNaN(number)) {
    return { status: 400, message: "Please enter a valid number !" };
  } else {
    const result = divisiblesAndPrimesByNumber(number);
    return { status: 200, message: result };
  }
};

module.exports = calculateService;

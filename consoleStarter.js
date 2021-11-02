const divisiblesAndPrimesByNumber = require("./Math/divisiblesAndPrimesNumber");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Please insert one number for calculations: ", (value) => {
  const string = value.toString();
  const number = Number.parseInt(string);
  if (Number.isNaN(number)) {
    console.log("Please enter a valid number !");
  } else {
    console.log(`Inputed Number: ${number}`);
    console.log(
      `Divisible Numbers: ${divisiblesAndPrimesByNumber(number).divisibles}`
    );
    console.log(
      `Prime Divisible Numbers: ${
        divisiblesAndPrimesByNumber(number).primeDivisibles
      }`
    );
  }
  readline.close();
});

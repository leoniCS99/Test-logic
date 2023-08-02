const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayMultiplicationTable(number) {
  console.log(`Multiplication Table of ${number}:`);
  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
  }
}

function askForNumber() {
  rl.question('Enter a number to display its multiplication table: ', (number) => {
    const parsedNumber = parseFloat(number);

    if (isNaN(parsedNumber)) {
      console.log('Please enter a valid number.');
    } else {
      displayMultiplicationTable(parsedNumber);
    }

    rl.close();
  });
}

askForNumber();

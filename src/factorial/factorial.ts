function calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    }
    return number * calculateFactorial(number - 1);
  }
  
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Enter a number: ', (input) => {
    const number = parseInt(input);
  
    const factorial = calculateFactorial(number);
    console.log(`Factorial of ${number} is: ${factorial}`);
    rl.close();
  });
  
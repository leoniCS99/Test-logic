const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
  rl.question('Enter the operator (+, -, *, /): ', (operator) => {
    rl.question('Enter the second number: ', (num2) => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      let result;
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            console.log('Error: Cannot divide by zero.');
            rl.close();
            return;
          }
          break;
        default:
          console.log('Error: Invalid operator.');
          rl.close();
          return;
      }

      console.log('Result:', result);
      rl.close();
    });
  });
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateFinalValue(initialCapital, interestRate, investmentTime) {
  const monthlyInterestRate = interestRate / 100 / 12;
  const finalValue = initialCapital * Math.pow(1 + monthlyInterestRate, investmentTime);
  return finalValue;
}

function askForValues() {
  rl.question('Digite o capital inicial: ', (initialCapital) => {
    const parsedInitialCapital = parseFloat(initialCapital);

    if (isNaN(parsedInitialCapital) || parsedInitialCapital < 0) {
      console.log('Por favor, digite um valor válido para o capital inicial.');
      rl.close();
    } else {
      rl.question('Digite a taxa de juros (em porcentagem): ', (interestRate) => {
        const parsedInterestRate = parseFloat(interestRate);

        if (isNaN(parsedInterestRate) || parsedInterestRate < 0) {
          console.log('Por favor, digite uma taxa de juros válida.');
          rl.close();
        } else {
          rl.question('Digite o tempo de investimento (em meses): ', (investmentTime) => {
            const parsedInvestmentTime = parseInt(investmentTime);

            if (isNaN(parsedInvestmentTime) || parsedInvestmentTime < 0) {
              console.log('Por favor, digite um tempo de investimento válido.');
            } else {
              const finalValue = calculateFinalValue(parsedInitialCapital, parsedInterestRate, parsedInvestmentTime);
              console.log(`O valor final após ${parsedInvestmentTime} meses é: ${finalValue.toFixed(2)}`);
            }

            rl.close();
          });
        }
      });
    }
  });
}

askForValues();

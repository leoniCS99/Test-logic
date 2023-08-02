const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateAverage(grades) {
  const totalGrades = grades.reduce((sum, grade) => sum + grade, 0);
  return totalGrades / grades.length;
}

function askForGrades() {
  const subjects = ['disciplina 1', 'disciplina 2', 'disciplina 3'];
  const grades = [];

  const askGrade = (index) => {
    if (index >= subjects.length) {
      const average = calculateAverage(grades);
      console.log(`A média das notas é: ${average.toFixed(2)}`);
      rl.close();
    } else {
      rl.question(`Digite a nota da ${subjects[index]}: `, (grade) => {
        const parsedGrade = parseFloat(grade);

        if (isNaN(parsedGrade) || parsedGrade < 0 || parsedGrade > 10) {
          console.log('Por favor, digite uma nota válida entre 0 e 10.');
        } else {
          grades.push(parsedGrade);
          askGrade(index + 1);
        }
      });
    }
  };

  askGrade(0);
}

askForGrades();

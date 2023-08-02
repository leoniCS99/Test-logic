const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countVowels(sentence) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of sentence) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

function askForSentence() {
  rl.question('Enter a sentence to count the number of vowels: ', (sentence) => {
    const vowelCount = countVowels(sentence);
    console.log(`The sentence has ${vowelCount} vowel(s).`);
    rl.close();
  });
}

askForSentence();

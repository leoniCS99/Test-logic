const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

function askForWord() {
  rl.question('Enter a word to check if it is a palindrome: ', (word) => {
    const sanitizedWord = word.trim().toLowerCase();

    if (isPalindrome(sanitizedWord)) {
      console.log(`"${word}" is a palindrome.`);
    } else {
      console.log(`"${word}" is not a palindrome.`);
    }

    rl.close();
  });
}

askForWord();

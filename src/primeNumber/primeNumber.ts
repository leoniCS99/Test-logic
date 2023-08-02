function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function findFirstNPrimes(n) {
    const primes = [];
    let number = 2;
  
    while (primes.length < n) {
      if (isPrime(number)) {
        primes.push(number);
      }
      number++;
    }
  
    return primes;
  }
  
  const first10Primes = findFirstNPrimes(10);
  console.log('First 10 prime numbers:', first10Primes.join(' '));
  
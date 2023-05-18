/** 
    *This function verifies if the given number is prime number.
    *@param {number} num 
    */
    function isPrime(num) {
        if (num < 2) {
            return false;
        }
        
        for (let i = 2; i < n - 1; i++) {
            if (num % i === 0) {
            return false;
            }
        }
        
        return true;
        }
        /** 
            *This function prints the prime numbers in the given range.
            *@param {number} min
            *@param {number} max 
            */
        function printPrimeNumbers(min, max) {
        const primes = [];
        
        for (let i = min; i <= max; i++){
            if(isPrime(i)){
                primes.push(i)
            }
        }
        
        console.log(primes)
        }
        
        printPrimeNumbers(1, 50);
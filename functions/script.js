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

/** 
    *This function prints the fibonacci sequence up until the given number.
    *@param {number} num
    */
function printFibonacci(num){
    let fibArr = [0, 1];

    for (let i = 2; i <= num; i++){
        fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
    }
    console.log(fibArr);
}

printFibonacci(50);

/** 
    *This function prints numbers in reverse order starting from the given number.
    *@param {number} num
    */
function printReverseOrder(num){
    for(let i = num; i >= 0; i--){
        console.log(i)
    }
};

printReverseOrder(50);

/** 
    *This function prints the factorial of the given number.
    *@param {number} num
    */
function printFactorial(num){
    let ans = 1;
    if (num === 0 || num === 1){
        console.log(1);
    }
    for(let i = 2; i <= num; i++){
        ans *= i;
    }
    console.log(ans);
};

printFactorial(5);

/** 
    *This function swaps the values of two variables using arithmetic operations.
    *@param {number} a
    *@param {number} b
    */
function printNumberSwap(a, b){
    console.log("1:" + a, "2:"+ b);
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("1:" + a, "2:" + b)
}

printNumberSwap(5, 10);

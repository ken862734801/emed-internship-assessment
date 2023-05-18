function isPrime(num) {
if (num < 2) {
    return false;
}

for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
    return false;
    }
}

return true;
}
  
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
   
function printFibonacci(num){
    let fibArr = [0, 1];

    for (let i = 2; i <= num; i++){
        fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
    }
    console.log(fibArr);
}

printFibonacci(50);

// This function prints numbers in reverse order starting from the given number.
// Parameter: num - The number from which the reverse order starts.

function printReverseOrder(num){
    for(let i = num; i >= 0; i--){
        console.log(i)
    }
};

printReverseOrder(50);

// This function prints the factorial of the given number.
// Parameters: num - The number from which we find the factorial.
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

// This function swaps the values of two variables using arithmetic operations.
// Parameters: a - The first number to swap.
//             b - The second number to swap.
function printNumberSwap(a, b){
    console.log("1:" + a, "2:"+ b);
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("1:" + a, "2:" + b)
}

printNumberSwap(5, 10);

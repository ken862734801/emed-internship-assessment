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
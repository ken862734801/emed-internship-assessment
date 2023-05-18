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
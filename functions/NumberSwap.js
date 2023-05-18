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
    
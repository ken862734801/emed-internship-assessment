
function printReverseOrder(num){
    for(let i = num; i >= 0; i--){
        console.log(i)
    }
};

printReverseOrder(50);

function printNumberSwap(a, b){
    console.log("1:" + a, "2:"+ b);
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("1:" + a, "2:" + b)
}

printNumberSwap(5, 10);

function printNumberSwap2(a, b){
    console.log("1:"+ a, "2:"+ b);
    [a, b] = [b, a];
    console.log("1:"+ a, "2:" + b);
}

printNumberSwap2(5, 10)
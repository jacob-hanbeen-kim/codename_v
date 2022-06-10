export const trailingZeroes = function (n) {
    let cur = 5, total = 0;
    while (cur <= n) {
       total += Math.floor(n / cur);
       cur *= 5;
    };
    return total;
};


/*
Maximum number he MAX_SAFE_INTEGER constant has a value of 
9007199254740991 (9,007,199,254,740,991 or ~9 quadrillion). 
The reasoning behind that number is that JavaScript uses 
double-precision floating-point format numbers as specified 
in IEEE 754 and can only safely represent integers between 
-(2^53 - 1) and 2^53 - 1. When factoiral go beyond that number
this method cannot handle computation. X
*/ 
export const trailingZeroesInit = function (n) {
    let factorialResult = 1;
    
    for(let i = 1; i<=n; i++){
        factorialResult = factorialResult * i;
        if(factorialResult>10000000000000000){
            factorialResult=factorialResult%10000000000000000
        }
    }

    let temp = factorialResult+"";
    temp = temp.split('');    

    let result = 0;

    console.log(temp)
    console.log(temp.length)

    
    if(temp[temp.length-1]==0){
        for( let i = temp.length-1; 0 <= i; i--){
            console.log(temp[i])
            if(temp[i]==='0'){
                result++;
            } else {
                break;
            }
        }
    } 

    return result;
};
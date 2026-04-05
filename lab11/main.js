function calculateSum(n){
    let sum=0;
    for(let x=1;x!=n+1;x++){
        sum+=x;
    }
    return sum;
}
console.log(6);


function multiply(a, b){
    return a*b;
}
console.log(multiply(2,2));


let power = (a,b) => {
    for(let x=1;x!=b;x++){
        a*=a;
    }
    return a;
}
console.log(power(3,3));


function harmonicSeries(n){
    if (n === 1) {
    return 1;
    } else {
    return harmonicSeries(n - 1) + 1 / n;
    }
}

console.log(harmonicSeries(3));



function createMultiplier(multiplier){
    return function(submultiplier){
        return multiplier*submultiplier;
    }
}

let multi = createMultiplier(5);
console.log(multi(3));




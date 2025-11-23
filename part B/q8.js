let nums = [10, 3, 7, 20, 13, 2];
let squares = nums.map(n =>n*n);
const isPrime = n => {
    if(n<2) return false;
    for(let i=2;i<=Math.sqrt(n);i++)
{        if(n%1 === 0) return false;
    }
    return true;
};
let primes = nums.filter(isPrime);
let sum  = nums.reduce((acc,val) =>
    acc +val,0);
let decending = nums.slice().sort ((a,b )=>b-a);

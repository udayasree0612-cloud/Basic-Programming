functionisPrime(num)
 {
    if(num <= 1) return false;
    for (let i = 2; i<=Math.sqrt(num);i++)
    {
        if(num % i === 0)
            return false;
    }
    return true;
}
function evenOdd(num)
{
    return num % 2 ===0;
}

console.log(isPrime(7));
console.log(isPrime(10));
console.log(evenOdd(4));
console.log(evenOdd(3));


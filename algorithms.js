function prime(num) {

    for (let i =2; i < num; i++) {

        console.log(`The number is ${num} and i is at ${i}`)
        if(num % i === 0) {

            console.log(`I'm returning false here at i = ${i}`)
            return false;
        }
    }
    return true;
}

console.log(prime(13));
console.log(prime(12));
console.log(prime(11));
console.log(prime(15));
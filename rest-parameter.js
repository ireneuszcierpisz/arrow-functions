const sumAll = (a,b,c) => a+b+c;
let sum1 = sumAll(1,2,3);
console.log("sum1: ",sum1); // sum1:  6

let sum2 = sumAll(1,2,3,4,5);
console.log("sum2: ", sum2); // sum2:  6

const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
}
let sum3 = sumRest(1,2,3,4,5);
console.log("sum3: ", sum3); // sum3:  15

/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function add(a, b) {
    return a + b
}
let sum0 = add(2, 2);
console.log('Hello! That is: ' + sum0);

// Arrow Function With Parameters
const add1 = (a, b) => {
    return a + b
}
let sum1 = add(2, 3);
console.log('Hello! That is: ' + sum1);

// Single Line Arrow Function With Parameters
const add2 = (a, b) => a + b
let sum2 = add(3, 3);
console.log('Hello! That is: ' + sum2);

// Implicit Returns
const say = msg => console.log(msg);
say('Hi!');

const sayHi = () => console.log('Hi!!!');
sayHi();

// Returning Multiple Lines
const multiLine = () => (
    `<p>
        This is the paragraph.
    </p>`
)
console.log(multiLine());
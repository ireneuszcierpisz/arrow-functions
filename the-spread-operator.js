let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1, arr2); //[ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

// copying array
let arr3 = [...arr1, 5];
console.log(arr1, arr3); //[ 1, 2, 3, 4 ] [ 1, 2, 3, 4, 5 ]
arr3.push(7)
console.log(arr1, arr3); //[ 1, 2, 3, 4 ] [ 1, 2, 3, 4, 5, 7 ]

// copying object
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d:4};
let obj3 = {...obj1, b: 7};
console.log(obj1, obj2, obj3); //{ a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3, d: 4 } { a: 1, b: 7, c: 3 }

let arr4 = [...arr1, {...obj3}, ...arr3, 'x', 'y'];
console.log(arr4); // [ 1, 2, 3, 4, { a: 1, b: 7, c: 3 }, 1, 2, 3, 4, 5, 7, 'x', 'y' ]

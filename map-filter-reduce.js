// map
let num = [1, 2, 3, 4];
let num1 = num.map(x => x ** 2);
console.log(num1); // [ 1, 4, 9, 16 ]
const students = [
    {
        id: 1,
        name: 'ala',
        prof: 'developer',
        skills: 'js',
    },
    {
        id: 2,
        name: 'aba',
        prof: 'engeneer',
        skills: 'construction',
    },   
];
let students1 = students.map(x => [x.name, x.id]);
console.log(students1);
const nowy = {id: students[0].id, name: students[0].name};
// let students2 = students.map(x => {id: x.id, firstname: x.name})
console.log(nowy);

// filter
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nums1 = nums.filter(x => (x > 5));
console.log(nums1); // [ 6, 7, 8, 9, 10 ]
let nums2 = nums.filter(x => (x % 3 === 0));
console.log(nums2); // [ 3, 6, 9 ]
let strings = ['soft', 'anne', 'pasta', 'anula', 'animal', 'brad', 'anihilation', 'corn', 'zet'];
let strs = strings.filter(x => (x[0] === 'a' && x[1] === 'n'));
console.log(strs); // [ 'anne', 'anula', 'animal', 'anihilation' ]
let strs1 = strings.filter(x => (x.charAt(3) === 't'));
console.log(strs1); // [ 'soft', 'pasta' ]

// reduce method
let reducedNums = nums.reduce((acc, curr) => acc + curr, 0);
console.log(reducedNums); // 55

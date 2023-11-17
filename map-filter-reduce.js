// map
let num = [1, 2, 3, 4];
let num1 = num.map(x => x ** 2);
console.log(num1); // [ 1, 4, 9, 16 ]

const students = [
    {
        id: 1,
        name: 'ala',
        prof: 'developer',
        skills: [{name: 'js', yearsexperience: 3}, {name: 'html', yearsexperience: 4},]
    },
    {
        id: 2,
        name: 'aba',
        prof: 'engeneer',
        skills: [{name: 'js', yearsexperience: 2}, {name: 'css', yearsexperience: 5},]
    },
];

let students1 = students.map(x => [x.name, x.id]);
console.log(students1); // [ [ 'ala', 1 ], [ 'aba', 2 ] ]
const nowy = {id: students[0].id, name: students[0].name};
console.log(nowy); // { id: 1, name: 'ala' }


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

const rightProfession = students.filter(x => x.prof === 'developer');
console.log(rightProfession); 
// [
//     {
//       id: 1,
//       name: 'ala',
//       prof: 'developer',
//       skills: [ [Object], [Object] ]
//     }
// ]
const aba = students.filter(x => x.name === 'aba');
console.log('aba:',aba); 
// aba: [
//     {
//       id: 2,
//       name: 'aba',
//       prof: 'engeneer',
//       skills: [ [Object], [Object] ]
//     }
//   ]
const aba1 = students.filter(x => x.name === 'aba')[0];
console.log(aba1);       
//   {
//     id: 2,
//     name: 'aba',
//     prof: 'engeneer',
//     skills: [
//       { name: 'js', yearsexperience: 2 },
//       { name: 'css', yearsexperience: 5 }
//     ]
//   }

// const candidates = students.filter(student => {
//     let strongSkills = student.skills.filter( skill => skill.yearsexperience >= 5);
//     return strongSkills.length > 0;
// });
// const myCandidate = students.filter(student => student.skills.filter(skill => skill.yearsexperience <= 1));
// console.log('myCandidate  ', myCandidate);
// const candidates = students.filter(student => student.skills.filter(skill => skill.name === "html"));
// console.log('candidates: ', candidates);
//--- summary:
const has5yExperience = skill => skill.yearsexperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5yExperience).lenght > 0;
const candidates = students.filter(hasStrongSkills);
console.log('candidates: ', candidates);
//---


// reduce method
let reducedNums = nums.reduce((acc, curr) => acc + curr, 0); //explicitly specifying the initial value of zero.
console.log(reducedNums); // 55

let team = [
    {
        name: 'an',
        prof: 'dev',
        yExp: 5
    },
    {
        name: 'ar',
        prof: 'dev',
        yExp: 7
    },
    {
        name: 'm',
        prof: 'des',
        yExp: 1
    },
    {
        name: 'k',
        prof: 'des',
        yExp: 3
    },
    {
        name: 'l',
        prof: 'manager',
        yExp: 10
    }
];
//use reduce to find a total experience of the team
let totalExp = team.reduce((acc, curr) => acc + curr.yExp, 0);
console.log(totalExp); // 16

//use reduce to group team members by profession and find the total experience for each profession.
let experienceByProfession = team.reduce((acc, curr) => {
    let key = curr.prof;
    if (!acc[key]) {
        acc[key] = curr.yExp;
    } else {
        acc[key] += curr.yExp;
    }
    return acc;
}, {});
console.log(experienceByProfession); // { dev: 12, des: 4, manager: 10 }

//for each  profession provide an array of the names of employees
let nameByProfession = team.reduce((acc, curr) => {
    let key = curr.prof;
    if (!acc[key]) {
        acc[key] = [curr.name];
    } else {
        acc[key].push(curr.name);
    }
    return acc;
}, {});
console.log(nameByProfession); //{ dev: [ 'an', 'ar' ], des: [ 'm', 'k' ], manager: [ 'l' ] }
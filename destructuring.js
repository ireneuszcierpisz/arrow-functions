let ages = [15, 30, 45];
let j = ages[0];
let m = ages[1];
let k = ages[2];
console.log(j, m, k); //15 30 45
// destructing arrays:
let [i, n, l] = ages;
console.log(j, m, k); //15 30 45

let jobs = {
    ann: "ceo",
    ted: "accountant",
    sam: "driver",
};
// let ann = jobs.ann;
// let ted = jobs.ted;
// let sam = jobs.sam;
// console.log(ann, ted, sam); // ceo accountant driver
// destructing objects:
let { ann, ted, sam } = jobs;
console.log(ann, ted, sam); //ceo accountant driver


// destructuring subsets
let languages = ['fr', 'en', 'pol', 'span', 'germ'];
let [johnLanguage1, johnLanguage2] = languages;
console.log(johnLanguage1, johnLanguage2); //fr en
let [ , , myLng1, , myLng2] = languages;
console.log(myLng1, myLng2); // pol germ

let langs = {
    annLang: 'fr',
    steveLang: 'eng',
    tomLang: 'pol',
    shanLang: 'irish',
    suLang: 'hindi',
};
let {steveLang, shanLang} = langs;
console.log(steveLang, shanLang); // eng irish


//Using rest parameter syntax
let colors = ['green', 'black', 'gray', 'blue', 'yellow', 'red'];
let [favorite1, favorite2, ...others] = colors;
console.log(favorite1); // green
console.log(favorite2); // black
console.log(others); // [ 'gray', 'blue', 'yellow', 'red' ]

let bestFood = {
    anne: 'pizza',
    stan: 'bigMac',
    lou: 'pasta',
    tim: 'steak',
};
let {anne, lou, ...rest} = bestFood;
console.log(anne); //pizza
console.log(lou); //pasta
console.log(rest); // { stan: 'bigMac', tim: 'steak' }
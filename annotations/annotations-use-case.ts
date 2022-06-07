// type any
/* const json = '{"x": 10, "y": "some sting"}';
const coordinates = JSON.parse(json);
console.log(coordinates); */

// solve type any
const json = '{"x": 10, "y": "some string"}';
const coordinates: { x: number; y: string } = JSON.parse(json);
console.log(coordinates);

// type any
/* let a;
a = 10; */

// solve type any
let a;
a = 10;

// let's see a practical example
let colors = ['red', 'green', 'blue'];
// type any problem
// let foundGreen;
// solve type any
let foundGreen: boolean;

let len = colors.length;
for (let i = 0; i < len; i++) {
  if (colors[i] == 'green') {
    foundGreen = true;
  }  
}

// another case, when TS can't infer type correctly
let numbers = [-11, -97, 2];
// type boolean, but we'll have to return a number!
// let numberAboveZero = false;  // initally false, hence it's boolean type!
// solution
let numberAboveZero: boolean | number = false;

let leng = numbers.length;
for (let i = 0; i < leng; i++) {
  if(numbers[i] > 0) {
    numberAboveZero = numbers[i];
    // problem! as numberAboveZero is boolean; it can't return a number! solution is ON_ABOVE
  }  
}
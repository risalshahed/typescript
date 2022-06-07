let apple: number = 5;
apple = 'keep doc away';  // apple is numer i.e. displays error

// here, declaring & assigning variables in same line, so TS can predict variable type
let abc = 'primary knowledge';

// but if the variable is assigned on separate line, TS can't predict var type
let pi;
pi = 3.14;

let nothing: null = null;
let nothing2: undefined = undefined;

let now: Date = new Date();

// Array of similar type
let names: string[] = ['riaj', 'niaj', 'diaj'];
let num: number[] = [1, 2, 3];
let logical: boolean[] = [true, false, true];

// Classes
let Car {

}
// make an instance of class Car (Classes' Name starts with Capital Letter)
// let car: Car = new Car(); // variable 'car' is an instace of the Class 'Car'

// let car: Car = new Car();

// Object Literal
let person: { name: string; age: number } = {   // separated by semi-colon
  name: 'Saiful',
  age: 30
}

// Function; in function we really care about
// what argments are gonna go into the functions
// & what different types of values we expect the function to return

/*
  const myFunction: (params: paramsType) => (the different values I expect this function to return) = (params: paramsType) => {

  }
*/

const myFunc: (i: number) => void = (i: number) => {
  console.log(i);
}
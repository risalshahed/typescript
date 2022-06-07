
// const myFunc = (param1: type, param2: type): type_of_retrun_value_of_myFunc => {...}
const add = (a: number, b: number): number => {
  return a + b;
}

// same goes for anonymous function
function subtract(a: number, b: number): number {
  return a - b;
}

// void
const something = (message: string): void => {
  console.log(message);
  // void means return NOTHING, BUT it can return undefined accidentally
  // return undefined;

  // return 'cant return anything';
}

// never
const error = (message: string): never => {
  throw new Error(message);
  // never means NEVER RETURN ANYTHING
  // return message;  // can't do it
}
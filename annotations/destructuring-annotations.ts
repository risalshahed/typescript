

const todaysWeather = {
  date: new Date(),
  weather: 'Sunny'
}

// create a function which will logout the 'weather' property of 'forecase' object
// like Object Literal in the MOST_BELOW
/* const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
} */

// destructuring in TypeScript
const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
}
// General Form of the above code
// myFunc = ({destuctured_vars}: {annotations_of vars:type}): type_of_return_value {...}

logWeather(todaysWeather);

// Object Literal
let person: { name: string; age: number } = {   // separated by semi-colon
  name: 'Saiful',
  age: 30
}
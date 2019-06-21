


// Practice: Take an array of company employees and return an object of company statistics.  There should be one property in this object, for each property found in an employee.  Each property should be mapped to an object containing property values, mapped to the number of employees matching that property value.  You can assume that all employees have the same set of properties.
// Example input:
// [
//     { firstName: 'Bob', gender: 'male', performance: 'good' },
//     { firstName: 'Alice', gender: 'female', performance: 'good' },
//     { firstName: 'Sam', gender: 'male', performance: 'excellent' },
//     { firstName: 'Sarah', gender: 'female', performance: 'bad' },
// ]
// Example output:
// {
//   firstName: {
//     'Bob': 1, 'Alice': 1, 'Sam': 1, 'Sarah': 1
//   },
//   gender: {
//     'male': 2, 'female': 2
//   },
//   performance: {
//     'good': 2, 'excellent': 1, 'bad': 1
//   }
// }
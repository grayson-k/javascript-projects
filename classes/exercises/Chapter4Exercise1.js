// Chapeter 4 Exercise 1 Solution Grayson Keaton May 21, 2024

let shuttleName = "Determination";
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
let milesPerKm = 0.621;

// console.log(typeof(shuttleName));
// console.log(typeof(shuttleSpeed));
// console.log(typeof(distanceToMars));
// console.log(typeof(distanceToMoon));
// console.log(typeof(milesPerKm));

// Calculation of time to reach Mars
let milesToMars = distanceToMars * milesPerKm;
let timeInHours = milesToMars / shuttleSpeed;
let timeInDays = timeInHours / 24;

// Calculation of time to reach the Moon
let milesToMoon = distanceToMoon * milesPerKm
let daysToMoon = milesToMoon / shuttleSpeed / 24;

// Print statements
console.log(shuttleName + " will take " + timeInDays + " days to reach Mars.");
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");

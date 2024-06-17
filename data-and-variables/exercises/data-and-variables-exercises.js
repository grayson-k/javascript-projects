// Declare and assign the variables below
let name = "Determination";
let speedOfShuttle = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
let milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
// console.log(typeof name);
// console.log(typeof speedOfShuttle);
// console.log(typeof distanceToMars);
// console.log(typeof distanceToMoon);
// console.log(typeof milesPerKm);

// Calculate a space mission below
let milesToMars = distanceToMars * milesPerKm;
let hoursToMars = distanceToMars / speedOfShuttle;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(name + " will take " + daysToMars + " days to reach Mars.");

// Calculate a trip to the moon below
let milesToMoon = distanceToMoon * milesPerKm;
let hoursToMoon = milesToMoon / speedOfShuttle;
let daysToMoon = hoursToMoon / 24;

// console.log(milesToMoon);
// console.log(hoursToMoon);
// console.log(daysToMoon);

// Print the results of the trip to the moon below
console.log(name + " will take " + daysToMoon + " days to reach the Moon.");
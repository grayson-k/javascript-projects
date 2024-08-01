let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   moves: function() {
      return Math.floor(Math.random()*11);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   moves: function() {
      return Math.floor(Math.random()*11);
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   moves: function() {
      return Math.floor(Math.random()*11);
   }
}

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   moves: function() {
      return Math.floor(Math.random()*11);
   }
}

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   moves: function() {
      return Math.floor(Math.random()*11);
   }
}

let crew = [superChimpOne, salamander, superChimpTwo, beagle, tardigrade];

function crewReports(animal) {
   console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}`)
}

function fitnessTest(animals) {
   let turns = [];
   for (let i = 0; i < animals.length; i++) {
      let animalTurns = 0;
      let steps = 20;
      while (steps > 0) {
         animalTurns += 1;
         steps -= animals[i].moves()
      }
      turns.push(`${animals[i].name} took ${animalTurns} turns to take 20 steps.`);
   }
   return turns;
}

console.log(fitnessTest(crew));


// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

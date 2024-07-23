//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCanidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore);
        return null;
    }
    average() {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        return Math.round(10*sum/(this.scores.length))/10
    }
    status() {
        let average = this.average()
        if (average >= 90) {
            return "Accept";
        } else if (average >= 80) {
            return "Reserve";
        } else if (average >= 70) {
            return "Probationary";
        } else {
            return "Rejected";
        }
    }
}

let bear = new CrewCanidate('Bubba Bear', 135, [88, 85, 90]);
let birdDog = new CrewCanidate('Merry Maltese', 1.5, [93, 98, 97]);
let gator = new CrewCanidate('Glad Gator', 225, [75, 78, 62]);

// bear.addScore(83);
// console.log(bear);

// console.log(bear.average());
// console.log(bear.status());

// console.log(bear, birdDog, gator);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let arrayOfAnimals = [bear, birdDog, gator];

function printStatus() {
    for (let i = 0; i < arrayOfAnimals.length; i++) {
        console.log(`${arrayOfAnimals[i].name} earned an average test score of ${arrayOfAnimals[i].average()} and has a status of ${arrayOfAnimals[i].status()}`)
    }
}

printStatus();
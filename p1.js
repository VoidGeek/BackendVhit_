while (true) {
    var y = 15;
    let z = 20;
    const w = 10;
    break;
}

// Uncomment the following lines to see the output
// console.log(w)
// console.log(z)
console.log(y);

function makeMePass(pass) {
    return pass;
}

let received = makeMePass(35);
console.log(received);

let welcome = function sayHi(name) {
    console.log(`Hello, ${name}`);
}

welcome("Bala");

let arrow = () => {
    console.log('arrow');
}

arrow();

class Human {
    constructor(skill, accomplishTime) {
        this.skill = skill;
        this.accomplishTime = accomplishTime;
    }
    effortMakesIt() {
        console.log(`${this.skill} acquired in ${this.accomplishTime}`);
    }
}

const guru = new Human('Developer', "6 months");
const shishya = new Human("Developer", "1.5 years");
guru.effortMakesIt();
shishya.effortMakesIt();

let user = new Object();
let student = {};
let employee = {
    role: "Trainer",
    age: 25,
    "x developer": true,
    Trainer: function () {
        console.log("Has worked");
    }
}

employee["x developer"] = false;
console.log(employee["x"]);

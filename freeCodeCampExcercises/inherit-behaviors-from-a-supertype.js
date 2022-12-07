function Animal() { }

Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

console.log(duck, beagle)
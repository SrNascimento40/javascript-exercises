function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nham nham");
  },
  describe: function() {
    console.log("My doggo name is " + this.name);
  }
};
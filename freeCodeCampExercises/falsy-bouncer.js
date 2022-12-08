function bouncer(arr) {
  return arr.filter(function(v) { return !!v; });
}

console.log(bouncer([7, "ate", "", false, 9]));
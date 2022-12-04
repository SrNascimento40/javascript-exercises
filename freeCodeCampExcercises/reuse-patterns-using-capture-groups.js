let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);
// "/^(\d+)\s\1\s\1$/" vai retornar true quando encontrar digitos que se repitam 3 vezes com um espaço entre eles
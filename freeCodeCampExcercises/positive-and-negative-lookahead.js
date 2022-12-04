  let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D\w*\d{2})/; // Change this line
//"\w{5,}" this makes you find characteres greater than 5
//"(?=\D\w*\d{2})" this makes you find 2 consecutive digits
let result = pwRegex.test(sampleWord);
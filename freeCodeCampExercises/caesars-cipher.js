function rot13(str) {
  let newStr = '';
  for(let i=0; i<str.length; i++){
      let asciiCode = str.charCodeAt(i);
      if(asciiCode>=78 && asciiCode <=90){
          asciiCode = asciiCode - 13;
      }else if(asciiCode <78 && asciiCode >= 65){
          asciiCode = asciiCode + 13;
      }
      newStr += String.fromCharCode(asciiCode);
  }
  return newStr;
}

rot13("SERR PBQR PNZC");
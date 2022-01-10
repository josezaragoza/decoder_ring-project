// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    if (!encode) {
      shift = -shift;
      //allows function to move back
    }
    const newMessage = [];
    //loop through each character in message
    for (let i = 0; i < input.length; i++) {
      if (alphabet.includes(input[i].toLowerCase())) {
        let letterIndex = alphabet.findIndex(
          (letter) => letter === input[i].toLowerCase()
        );
        let newLetterIndex = letterIndex + shift;
        if (newLetterIndex > 25) {
          newLetterIndex -= 26;
        } else if (newLetterIndex < 0) {
          newLetterIndex += 26;
        }
        letterIndex + shift;
        newMessage.push(alphabet[newLetterIndex]);
      } else {
        newMessage.push(input[i]);
      }
    }
    return newMessage.join("");
  }
  //if the character is a letter, shift it by the shift value
  //for (let k = 0; k < inputArray.length; )
  //if the character is not a letter, add it to the new message as is
  //if letter is greater than 26, letter = number-26
  //return shifted message (in lowercase)

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

function reverseWord(word){
/*
function reverses a word's consonants and forms a new word

*/
return word.split('').reverse().join("")
}



function isPalindrome(word) {
  // Write your algorithm here
const reversedWord = reverseWord(word)
 return word === reversedWord

}
  

/* 
  Add your pseudocode here
  -word.split(''),to form an array and save it to a variable newWord
  -newWord.reverse() to reverse content of array,store in variable reversedWord
  reversedWord.join() to form a new string out reversed content
  -
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome(""))
}

module.exports = isPalindrome;

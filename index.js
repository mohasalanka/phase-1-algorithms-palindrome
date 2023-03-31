function isPalindrome(word) {
  const length = word.length;
    for (let i = 0; i < length / 2; i++) {
      if (word[i] !== word[length - 1 - i]) {
        return false;
      }
    }
    return true;
}

/* 
  Add your pseudocode here
  Pseudocode:

Define a function named isPalindrome that takes a single parameter, a string called word.
Get the length of the word using the length property of the string object and assign it to a constant named length.
Loop through the string from the first character to the middle of the string using a for loop and the variable i.
For each iteration, check if the character at index i is not equal to the character at the corresponding index from the end of the string.
If they are not equal, return false since the word is not a palindrome.
If the loop completes without finding a mismatch, return true since the word is a palindrome.
*/

/*
  Add written explanation of your solution here
  Explanation:

The function isPalindrome checks if a given string is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward or forward.

The function starts by getting the length of the input word and assigning it to a constant named length. It then loops through the string from the first character to the middle of the string using a for loop and the variable i. For each iteration, it checks if the character at index i is not equal to the character at the corresponding index from the end of the string (which is length - 1 - i). If they are not equal, the function returns false since the word is not a palindrome. If the loop completes without finding a mismatch, the function returns true since the word is a palindrome.

The function is then exported so that it can be used in other parts of the program. The code at the bottom tests the function by running it with two example inputs, "racecar" and "robot", and printing the expected output and actual output.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

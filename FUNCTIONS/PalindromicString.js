// Palindromic String:
// Write a function isPalindrome that checks if a given string is a palindrome (reads the same backward as forward)



/*A palindromic string is a sequence of characters that reads the same forward as backward. For example, "radar" and "level" are palindromic strings.*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPalindrome(str) {
  // Reverse the string
  let reversedStr = str.split('').reverse().join('');

  // Compare original and reversed strings
  return str === reversedStr;
}

// Get user input
rl.question("Enter a word or phrase: ", function(userString) {
  // Check if the user input is a palindrome
  if (isPalindrome(userString)) {
    console.log("Yes, it's a palindrome!");
  } else {
    console.log("No, it's not a palindrome.");
  }

  // Close the readline interface
  rl.close();
});

  
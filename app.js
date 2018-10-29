// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

// function reverseString(str) {
// return str
//   .split("")
//   .reverse()
//   .join('');
///////////////////////
// let reverseString = "";
// str.split("").forEach(element => (reverseString = element + reverseString));
// return reverseString;
// }

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

// function isPalindrome(str) {
//   const reverseString = str
//     .split("")
//     .reverse()
//     .join("");
//   return reverseString === str;
// }

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

// function reverseInt(int) {
//   const reverseString = int
//     .toString()
//     .split("")
//     .reverse()
//     .join("");
//   return parseInt(reverseString) * Math.sign(int);
// }

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
// function capitalizeLetters(str) {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map(word => word[0].toUpperCase() + word.substr(1))
//     .join(" ");
// }
// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
// function maxCharacter(str) {
//   const charMap = {}
//   str.split('').forEach(char => charMap[char])
// }

// // CHALLENGE 6: FIZZBUZZ
// // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
// function fizzBuzz() {
//   for (let i = 1; 1 <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log("FizzBuzz");
//     }
//   }
// }

// // Call Function
// const output = fizzBuzz();

// console.log(output);

// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  const sorted = wordArr.sort(function(a, b) {
    return b.length - a.length;
  });
  const longestWordArr = sorted.filter(function(word) {
    return word.length === sorted[0].length;
  });
  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

// Call Function
const output = longestWord("Hello, my nameeee is Brad");

console.log(output);

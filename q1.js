/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all
 non-alphanumeric characters, it reads the same forward and backward.
  Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
*/

let isPalindrome = function (string) {
  let tempStr = string;
  if (tempStr === "") {
    return true;
  }
  tempStr = tempStr.toLowerCase().replace(/[^\w\n]/g, "");
  let ReverseStr = tempStr.split("").reverse().join("");
  if (tempStr === ReverseStr) {
    return true;
  } else {
    return false;
  }
  console.log(tempStr);
  console.log(ReverseStr);
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(""));

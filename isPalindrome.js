function isPalindrome(str) {
  const stringtoCheck = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  return stringtoCheck === stringtoCheck.split('').reverse().join('');
}

// Test the function
console.log(isPalindrome("as sdfg gfds sa")); // true
console.log(isPalindrome("hello")); // false

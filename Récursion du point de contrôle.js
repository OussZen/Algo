function isPalindrome(word) {
    // Remove spaces and convert the word to lowercase for case-insensitive comparison
    word = word.replace(/\s/g, '').toLowerCase();
  
    // Base case: An empty word or a word with a single character is a palindrome
    if (word.length <= 1) {
      return true;
    }
  
    // Compare characters at the ends of the word
    if (word[0] === word[word.length - 1]) {
      // Recursively check the rest of the word
      return isPalindrome(word.slice(1, -1));
    } else {
      return false; // If the characters don't match, it's not a palindrome
    }
  }
  
  // Example usage:
  const word1 = "gag";
  const word2 = "kayak";
  const word3 = "php";
  const word4 = "radar";
  const word5 = "hello";
  
  console.log(Is "${word1}" a palindrome? ${isPalindrome(word1)});
  console.log(Is "${word2}" a palindrome? ${isPalindrome(word2)});
  console.log(Is "${word3}" a palindrome? ${isPalindrome(word3)});
  console.log(Is "${word4}" a palindrome? ${isPalindrome(word4)});
  console.log(Is "${word5}" a palindrome? ${isPalindrome(word5)});

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
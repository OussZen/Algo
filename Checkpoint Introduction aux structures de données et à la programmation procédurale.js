// function findDistinctSum(set1, set2) {
//     let sum = 0;
  
//     // Iterate through elements in set1
//     for (let element of set1) {
//       if (!set2.includes(element)) {
//         sum += element;
//       }
//     }
  
//     // Iterate through elements in set2
//     for (let element of set2) {
//       if (!set1.includes(element)) {
//         sum += element;
//       }
//     }
  
//     return sum;
//   }
  
//   const set1 = [3, 1, 7, 9];
//   const set2 = [2, 4, 1, 9, 3];
  
//   const result = findDistinctSum(set1, set2);
//   console.log("Output:", result); // Output: 13 (distinct elements 4, 7, 2)



// Function to calculate dot product of two vectors
function dotProduct(v1, v2) {
    if (v1.length !== v2.length) {
      throw new Error("Vectors must have the same length.");
    }
  
    let product = 0;
    for (let i = 0; i < v1.length; i++) {
      product += v1[i] * v2[i];
    }
  
    return product;
  }
  
  // Function to check if two vectors are orthogonal
  function areOrthogonal(v1, v2) {
    const product = dotProduct(v1, v2);
    return product === 0;
  }
  
  // Example usage:
  const vector1 = [1, 0, -1];
  const vector2 = [0, 1, 0];
  
  if (areOrthogonal(vector1, vector2)) {
    console.log("The vectors are orthogonal.");
  } else {
    console.log("The vectors are not orthogonal.");
  }
// Write a function factorial that calculates the factorial of a given number. The factorial of n is the product of all positive integers up to n.


function factorial(n) {
    // Check karo function 0 ya 1 to nahi hai kyuki 0 aur 1 ka factorial 1 hi hota hai
    if (n === 0 || n === 1) {
      return 1;
    } 
    
    // Initialize the product to 1
    let product = 1;
  
    // Iterate from 2 to n and multiply each number to the product
    for (let i = 2; i <= n; i++) {
      product *= i;
    }
  
    // Return the final product
    return product;
  }
  
  // Example usage:
  let result = factorial(4);
  console.log("Factorial of 4:", result);
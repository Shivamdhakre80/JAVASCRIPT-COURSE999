/*Sum of Numbers:
Write a program that calculates the sum of numbers from 1 to 10 using a for loop.*/


let sum = 0;
for (i=1; i<=10;i++) {
    // code to be executed in each iteration
    sum += i;
  }
  console.log("Sum of numbers from 1 to 10 is:", sum);












 /* Explanation:

Initialization:

let sum = 0;: We initialize a variable sum to 0. This variable will be used to accumulate the sum of numbers.
for Loop:

for (let i = 1; i <= 10; i++) {: This is a for loop that starts with i being 1, continues as long as i is less than or equal to 10, and increments i by 1 in each iteration.
i is the loop variable that represents the current number in the range from 1 to 10.
Accumulating Sum:

sum += i;: In each iteration of the loop, we add the current value of i to the sum. This is equivalent to saying sum = sum + i;. So, in the first iteration, we add 1 to sum, in the second iteration, we add 2, and so on.
Result:

console.log("Sum of numbers from 1 to 10:", sum);: Finally, we print the calculated sum to the console.*/
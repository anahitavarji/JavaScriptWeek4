
// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
// Example 1:
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2


var nums = [ 1 , 4, 7];
nums1 = [1 , 2 , 4 , 5]
var sum = 0;

//Sum of all nums
for ( var index = 0; index < nums.length; index++){
    sum += nums[index]
}

var count = nums.length


console.log(sum / nums.length);




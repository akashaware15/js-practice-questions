//******************************* Easy Question *******************************//


//Q1. Write a function that takes an integer minutes and converts it to seconds

function minutestoSeconds(minutes) {
    return minutes * 60;
}
console.log(minutestoSeconds(10))



//Q2. Create a function that takes a number as an argument, increments the number by +1 and returns the result

function increment(num) {
    return num + 1;
}
console.log(increment(10))



//Q3. Write a function that takes the base and height of a triangle and return its area
//  formula of area is ---> Area = 1/2 * base * height

function triangleArea(base, height){
    return 0.5 * base * height;
}
console.log(triangleArea(5, 10))



//Q4. Create a function that takes length and width and finds the perimeter of a rectangle.
// formula of Perimeter is --->  parimeter = 2 * (length + width)

function FindPerimeter(length, width){
    return 2 * (length + width);
}
console.log(FindPerimeter(5, 10))



//Q5. Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function Sum2Number(a, b){
    return (a + b) < 100;
}
console.log(Sum2Number(40, 50)) //this condition is true because 40 + 50 is less then 100
console.log(Sum2Number(60, 50)) //this condition is false because 60 + 50 is greater then 100



//Q6. Write a function that checks whether a number is even or odd.

function evenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd"; // using ternary operator 
}
console.log(evenOrOdd(4)); // even
console.log(evenOrOdd(7)); // odd



//******************************* Meadium Question *******************************//


//Q1.Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10
//formula ---> sum = n * (n + 1) / 2

function sumNumbers(n) {
    return (n * (n + 1)) / 2;
}
console.log(sumNumbers(4));


//Q2. Write a function that takes three numbers and returns the largest of them.

function findLargest(a, b, c) {
    return Math.max(a, b, c);
}
console.log(findLargest(22, 95, 50));


//Q3.Write a function that returns the factorial of a given number.

function factorial(n) {
    let result = 1;  // start with 1
    for (let i = 2; i <= n; i++) {  // loop from 2 to n
        result *= i; //  multiply result by i each time
    }
    return result;
}
console.log(factorial(5))
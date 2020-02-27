// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation
convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

//Function Decleration
function addOne(n) {
  return n + 1;
}

// Function Expression
let addOne = function(n) {
  return n + 1;
};

// Arrow Function
let addOne = n => n + 1;

// Arrow Function With Curly Bracket

let addOne = n => {
  return n + 1;
};

// Function Invocation
addOne(21);


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

//Function Decleration
function subOne(n) {
  return n - 1;
}

// Function Expression
let subOne = function(n) {
  return n - 1;
};

// Arrow Function
let subOne = n => n - 1;

// Arrow Function With Curly Bracke
let subOne = n => {
  return n - 1;
};

// Function Invocation
subOne(21);

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

//Function Decleration
function addTwo(x, y) {
  let sum = x + y;
  return sum;
};

// Function Expression
let addTwo = function(x, y) {
  let sum = x + y;
  return sum;
};

// Arrow Function
let addTwo = (x , y) => (x + y);

// Arrow Function With Curly Bracket
let addTwo = (x, y) => {
  sum = x + y;
  return sum;
};

// Function Invocation
addTwo(2, 4);


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

//Function Decleration
function subtr(x, y) {
  let difference = x - y;
  return difference;
};

// Function Expression
let subtr = function(x, y) {
  let difference = x - y;
  return difference;
};

// Arrow Function
let subtr = (x , y) => (x - y);

// Arrow Function With Curly Bracket
let subtr = (x, y) => {
  difference = x - y;
  return difference;
};

// Function Invocation
subtr(2, 4);


/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

//Function Decleration
function mulTwo(x, y) {
  let product = x * y;
  return product;
};

// Function Expression
let mulTwo = function(x, y) {
  let product = x * y;
  return product;
};

// Arrow Function
let mulTwo = (x , y) => (x * y);

// Arrow Function With Curly Bracket
let mulTwo = (x, y) => {
  product = x * y;
  return product;
};

// Function Invocation
mulTwo(2, 4);

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

//Function Decleration
function divide(x, y) {
  let quotient = x / y;
  return quotient;
};

// Function Expression
let divide = function(x, y) {
  let quotient = x / y;
  return quotient;
};

// Arrow Function
let divide = (x , y) => (x / y);

// Arrow Function With Curly Bracket
let divide = (x, y) => {
  quotient = x / y;
  return quotient;
};

// Function Invocation
divide(2, 4);


/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

//Function Decleration
function square(x) {
  let squared = x * x;
  return squared;
};

// Function Expression
let square = function(x) {
  let squared = x * x;
  return squared;
};

// Arrow Function
let square = (x) => (x * x);

// Arrow Function With Curlx Bracket
let square = (x) => {
  squared = x * x;
  return squared;
};

// Function Invocation
square(2, 4);


/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

//Function Decleration
function mOper(operator, x, y) {
  switch (operator) {
    case "+":
    result = x + y;  
    break;
    case "-":
    result = x - y;  
    break;
    case "*":
    result = x * y;  
    break;
    case "/":
    result = x / y;  
    break;
    default:
    result = "Please Try Again";
  }
  return result;
};

// Function Expression
let mOper = function(operator, x, y) {
  switch (operator) {
    case "+":
    result = x + y;  
    break;
    case "-":
    result = x - y;  
    break;
    case "*":
    result = x * y;  
    break;
    case "/":
    result = x / y;  
    break;
    default:
    result = "Please Try Again";
  }
  return result;
};

// Arrow Function With Curly Bracket
let mOper = (operator, x, y) => {
  switch (operator) {
    case "+":
    result = x + y;  
    break;
    case "-":
    result = x - y;  
    break;
    case "*":
    result = x * y;  
    break;
    case "/":
    result = x / y;  
    break;
    default:
    result = "Please Try Again";
  }
  return result;
};

// Function Invocation
mOper("+", 8, 4)

 
/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

//Function Decleration
function greaterCheck(a, b) {
  if (a > b) { 
    return true; 
  } else  {
    return false; 
  };
};

// Function Expression
let greaterCheck = function(a, b) {
  if (a > b) { 
    return true; 
  } else  {
    return false; 
  };
};

// Arrow Function
let greaterCheck = (a , b) => (a > b) ? true : false;

// Arrow Function With Curly Bracket
let greaterCheck = (a, b) => {
  if (a > b) { 
    return true; 
  } else  {
    return false; 
  };
};

// Function Invocation
greaterCheck(2, 4);


/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

//Function Decleration
function smallerCheck(a, b) {
  if (a < b) { 
    return true; 
  } else  {
    return false; 
  };
};

// Function Expression
let smallerCheck = function(a, b) {
  if (a < b) { 
    return true; 
  } else  {
    return false; 
  };
};

// Arrow Function
let smallerCheck = (a , b) => (a < b) ? true : false;

// Arrow Function With Curly Bracket
let smallerCheck = (a, b) => {
  if (a < b) { 
    return true; 
  } else  {
    return false; 
  };
};

// Function Invocation
smallerCheck(2, 4);


/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
//Function Decleration
function equalCheck(a, b) {
  if (a = b) { 
    return true; 
  } else  {
    return false; 
  };
};

// Function Expression
let equalCheck = function(a, b) {
  if (a = b) { 
    return true; 
  } else  {
    return false; 
  };
};

// Arrow Function
let equalCheck = (a , b) => (a = b) ? true : false;

// Arrow Function With Curly Bracket
let equalCheck = (a, b) => {
  if (a = b) { 
    return true; 
  } else  {
    return false; 
  };
};

// Function Invocation
equalCheck(2, 4);
 
/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

 //Function Decleration
function smallerValueCh(a, b) {
  if (a > b) { 
    return b+ " is the smallest number"; 
  } else  {
    return a+ " is the smallest number"; 
  };
};

// Function Expression
let smallerValueCh = function(a, b) {
  if (a > b) { 
    return b+ " is the smallest number"; 
  } else  {
    return a+ " is the smallest number"; 
  };
};

// Arrow Function
let smallerValueCh = (a , b) => (a > b) ? b+ " is the smallest number" : a+ " is the smallest number";

// Arrow Function With Curly Bracket
let smallerValueCh = (a, b) => {
  if (a > b) { 
    return b+ " is the smallest number"; 
  } else  {
    return a+ " is the smallest number"; 
  };
};

// Function Invocation
smallerValueCh(2, 4);


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

 //Function Decleration
 function largerValueCh(a, b) {
  if (a > b) { 
    return a+ " is the largest number"; 
  } else  {
    return b+ " is the largest number"; 
  };
};

// Function Expression
let largerValueCh = function(a, b) {
  if (a > b) { 
    return a+ " is the largest number"; 
  } else  {
    return b+ " is the largest number"; 
  };
};

// Arrow Function
let largerValueCh = (a , b) => (a > b) ? a+ " is the largest number" : b+ " is the largest number";

// Arrow Function With Curly Bracket
let largerValueCh = (a, b) => {
  if (a > b) { 
    return a+ " is the largest number"; 
  } else  {
    return b+ " is the largest number"; 
  };
};

// Function Invocation
largerValueCh(2, 4);



/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

 //Function Decleration
 function evenCh(n) {
  if (n % 2 == 0) { 
    return true; 
  } else  {
    return false; 
  };
};

// Function Expression
let evenCh = function(n) {
  if (n % 2 == 0) { 
    return true; 
  } else  {
    return false; 
  };
};

// Arrow Function
let evenCh = (n) => (n % 2 == 0) ? true : false;

// Arrow Function With Curly Bracket
let evenCh = (n) => {
  if (n % 2 == 0) { 
    return true; 
  } else  {
    return false; 
  };
};

// Function Invocation
evenCh(2);


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
 
 //Function Decleration
 function odd(n) {
  if (n % 2 == 0) { 
    return false; 
  } else  {
    return true; 
  };
};

// Function Expression
let odd = function(n) {
  if (n % 2 == 0) { 
    return false; 
  } else  {
    return true; 
  };
};

// Arrow Function
let odd = (n) => (n % 2 == 0) ? false : true;

// Arrow Function With Curly Bracket
let odd = (n) => {
  if (n % 2 == 0) { 
    return false; 
  } else  {
    return true; 
  };
};

// Function Invocation
odd(2);

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "E": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

//Function Decleration
function grade(n ,mm) {
  var per =  (n / mm) * 100;
  
  switch(true) {
    case (per <= 100 && per >= 90):
      return "A";
      break;
    case (per <= 89 && per >= 80):
      return "B";
      break;
    case (per <= 79 && per >= 70):
      return "C";
      break;    
    case (per <= 69 && per >= 60):
      return "D";
      break; 
    case (per <= 59 && per >= 0):
      return "E";
      break;   
    default:
      return "Please Try Again"  
  }
};

// Function Expression
let grade = function(n, mm) {
  var per =  (n / mm) * 100;
  switch(true) {
    case (per <= 100 && per >= 90):
      return "A";
      break;
    case (per <= 89 && per >= 80):
      return "B";
      break;
    case (per <= 79 && per >= 70):
      return "C";
      break;    
    case (per <= 69 && per >= 60):
      return "D";
      break; 
    case (per <= 59 && per >= 0):
      return "E";
      break;   
    default:
      return "Please Try Again"  
  }
};

// Arrow Function With Curly Bracket
let grade = (n, mm) => {
  var per =  (n / mm) * 100;
  
  switch(true) {
    case (per <= 100 && per >= 90):
      return "A";
      break;
    case (per <= 89 && per >= 80):
      return "B";
      break;
    case (per <= 79 && per >= 70):
      return "C";
      break;    
    case (per <= 69 && per >= 60):
      return "D";
      break; 
    case (per <= 59 && per >= 0):
      return "E";
      break;   
    default:
      return "Please Try Again"  
  }
};

// Function Invocation
grade(50, 100);


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

//Function Decleration
function addTwoString(x, y) {
  let joined = x + " " + y;
  return joined;
};

// Function Expression
let addTwoString = function(x, y) {
  let joined = x + " " + y;
  return joined;
};

// Arrow Function
let addTwoString = (x , y) => (x + " " + y);

// Arrow Function With Curly Bracket
let addTwoString = (x, y) => {
  joined = x + " " + y;
  return joined;
};

// Function Invocation
addTwoString("Deepak", "Sharma");




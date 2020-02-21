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
function AddOne(n) {
  return n + 1;
}

// Function Expression
let AddOne = function(n) {
  return n + 1;
};

// Arrow Function
let AddOne = n => n + 1;

// Arrow Function With Curly Bracket

let AddOne = n => {
  return n + 1;
};

// Function Invocation
AddOne(21);


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

//Function Decleration
function SubOne(n) {
  return n - 1;
}

// Function Expression
let SubOne = function(n) {
  return n - 1;
};

// Arrow Function
let SubOne = n => n - 1;

// Arrow Function With Curly Bracke
let SubOne = n => {
  return n - 1;
};

// Function Invocation
SubOne(21);

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

//Function Decleration
function AddTwo(x, y) {
  let sum = x + y;
  return sum;
};

// Function Expression
let AddTwo = function(x, y) {
  let sum = x + y;
  return sum;
};

// Arrow Function
let AddTwo = (x , y) => (x + y);

// Arrow Function With Curly Bracket
let AddTwo = (x, y) => {
  sum = x + y;
  return sum;
};

// Function Invocation
AddTwo(2, 4);


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

//Function Decleration
function Subtr(x, y) {
  let difference = x - y;
  return difference;
};

// Function Expression
let Subtr = function(x, y) {
  let difference = x - y;
  return difference;
};

// Arrow Function
let Subtr = (x , y) => (x - y);

// Arrow Function With Curly Bracket
let Subtr = (x, y) => {
  difference = x - y;
  return difference;
};

// Function Invocation
Subtr(2, 4);


/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

//Function Decleration
function MulTwo(x, y) {
  let product = x * y;
  return product;
};

// Function Expression
let MulTwo = function(x, y) {
  let product = x * y;
  return product;
};

// Arrow Function
let MulTwo = (x , y) => (x * y);

// Arrow Function With Curly Bracket
let MulTwo = (x, y) => {
  product = x * y;
  return product;
};

// Function Invocation
MulTwo(2, 4);

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

//Function Decleration
function Divide(x, y) {
  let quotient = x / y;
  return quotient;
};

// Function Expression
let Divide = function(x, y) {
  let quotient = x / y;
  return quotient;
};

// Arrow Function
let Divide = (x , y) => (x / y);

// Arrow Function With Curly Bracket
let Divide = (x, y) => {
  quotient = x / y;
  return quotient;
};

// Function Invocation
Divide(2, 4);


/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

//Function Decleration
function Square(x) {
  let squared = x * x;
  return squared;
};

// Function Expression
let Square = function(x) {
  let squared = x * x;
  return squared;
};

// Arrow Function
let Square = (x) => (x * x);

// Arrow Function With Curlx Bracket
let Square = (x) => {
  squared = x * x;
  return squared;
};

// Function Invocation
Square(2, 4);


/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

//Function Decleration
function MOper(x, y) {
  let quotient = x + y;

  return alert(x+ " + " +y " = " +result \n );
};

// Function Expression
let MOper = function(x, y) {
  let quotient = x / y;
  return quotient;
};

// Arrow Function
let MOper = (x , y) => (x / y);

// Arrow Function With Curly Bracket
let MOper = (x, y) => {
  quotient = x / y;
  return quotient;
};

// Function Invocation
MOper(2, 4);

 

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

//Function Decleration
function GreaterCheck(a, b) {
  if (a > b) { 
    return true; 
  } else  {
    return false; 
  };
};

// Function Expression
let GreaterCheck = function(a, b) {
  if (a > b) { 
    return true; 
  } else  {
    return false; 
  };
};

// Arrow Function
let GreaterCheck = (a , b) => (a > b) ? true : false;

// Arrow Function With Curly Bracket
let GreaterCheck = (a, b) => {
  if (a > b) { 
    return true; 
  } else  {
    return false; 
  };
};

// Function Invocation
GreaterCheck(2, 4);


/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

//Function Decleration
function SmallerCheck(a, b) {
  if (a < b) { 
    return true; 
  } else  {
    return false; 
  };
};

// Function Expression
let SmallerCheck = function(a, b) {
  if (a < b) { 
    return true; 
  } else  {
    return false; 
  };
};

// Arrow Function
let SmallerCheck = (a , b) => (a < b) ? true : false;

// Arrow Function With Curly Bracket
let SmallerCheck = (a, b) => {
  if (a < b) { 
    return true; 
  } else  {
    return false; 
  };
};

// Function Invocation
SmallerCheck(2, 4);


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
function SmallerValueCh(a, b) {
  if (a > b) { 
    return b+ " is the smallest number"; 
  } else  {
    return a+ " is the smallest number"; 
  };
};

// Function Expression
let SmallerValueCh = function(a, b) {
  if (a > b) { 
    return b+ " is the smallest number"; 
  } else  {
    return a+ " is the smallest number"; 
  };
};

// Arrow Function
let SmallerValueCh = (a , b) => (a > b) ? b+ " is the smallest number" : a+ " is the smallest number";

// Arrow Function With Curly Bracket
let SmallerValueCh = (a, b) => {
  if (a > b) { 
    return b+ " is the smallest number"; 
  } else  {
    return a+ " is the smallest number"; 
  };
};

// Function Invocation
SmallerValueCh(2, 4);


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

 //Function Decleration
 function LargerValueCh(a, b) {
  if (a > b) { 
    return a+ " is the largest number"; 
  } else  {
    return b+ " is the largest number"; 
  };
};

// Function Expression
let LargerValueCh = function(a, b) {
  if (a > b) { 
    return a+ " is the largest number"; 
  } else  {
    return b+ " is the largest number"; 
  };
};

// Arrow Function
let LargerValueCh = (a , b) => (a > b) ? a+ " is the largest number" : b+ " is the largest number";

// Arrow Function With Curly Bracket
let LargerValueCh = (a, b) => {
  if (a > b) { 
    return a+ " is the largest number"; 
  } else  {
    return b+ " is the largest number"; 
  };
};

// Function Invocation
LargerValueCh(2, 4);



/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

 //Function Decleration
 function EvenCh(n) {
  if (n % 2 == 0) { 
    return true; 
  } else  {
    return false; 
  };
};

// Function Expression
let EvenCh = function(n) {
  if (n % 2 == 0) { 
    return true; 
  } else  {
    return false; 
  };
};

// Arrow Function
let EvenCh = (n) => (n % 2 == 0) ? true : false;

// Arrow Function With Curly Bracket
let EvenCh = (n) => {
  if (n % 2 == 0) { 
    return true; 
  } else  {
    return false; 
  };
};

// Function Invocation
EvenCh(2);


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
 
 //Function Decleration
 function Odd(n) {
  if (n % 2 == 0) { 
    return false; 
  } else  {
    return true; 
  };
};

// Function Expression
let Odd = function(n) {
  if (n % 2 == 0) { 
    return false; 
  } else  {
    return true; 
  };
};

// Arrow Function
let Odd = (n) => (n % 2 == 0) ? false : true;

// Arrow Function With Curly Bracket
let Odd = (n) => {
  if (n % 2 == 0) { 
    return false; 
  } else  {
    return true; 
  };
};

// Function Invocation
Odd(2);

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
function Grade(n ,mm) {
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
  }
};

// Function Expression
let Grade = function(n, mm) {
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
  }
};

// Arrow Function With Curly Bracket
let Grade = (n, mm) => {
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
  }
};

// Function Invocation
Grade(50, 100);


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

//Function Decleration
function AddTwoString(x, y) {
  let joined = x + " " + y;
  return joined;
};

// Function Expression
let AddTwoString = function(x, y) {
  let joined = x + " " + y;
  return joined;
};

// Arrow Function
let AddTwoString = (x , y) => (x + " " + y);

// Arrow Function With Curly Bracket
let AddTwoString = (x, y) => {
  joined = x + " " + y;
  return joined;
};

// Function Invocation
AddTwoString("Deepak", "Sharma");




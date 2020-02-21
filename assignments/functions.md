1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.

```js
// your code goes here
function calculateDogAge(age, convrate) {
  var age = age * convrate;
  return "Your doggie is " +age+ " years old in dog years!"
};
calculateDogAge(1, 7);
```

2. 🎖Write a function named calculateSupply that:
  * [ ] takes 2 arguments: age, amount per day.
  * [ ] calculates the amount consumed for rest of the life (based on a constant max age).
  * [ ] outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
  * [ ] Accept floating point values for amount per day, and round the result to a round number.

```js
// your code goes here
function calculateSupply(age, dailyamount) {
  totalamount = (60 - age) *  (365 * dailyamount);
  var result = Math.round(totalamount); 
  return "You will need " +result+ " to last you until the ripe old age of 60"
};
calculateSupply(50, 1.19);
```
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Store a celsius temperature into a variable.
  * [ ] Convert it to fahrenheit and output "NN°C is NN°F".
  * [ ] Create a function called fahrenheitToCelsius:
  * [ ] Now store a fahrenheit temperature into a variable.
  * [ ] Convert it to celsius and output "NN°F is NN°C."

```js
// your code goes here
function celsiusToFahrenheit(cTemp) {
  var cToFahr = cTemp * 9 / 5 + 32;
  return cToFahr+ "ᵒF";
}    
celsiusToFahrenheit(1);

function fahrenheitToCelsius (cFtemp) {
  var cToCel = (5/9) * (cFtemp-32);
  return cToCel+ "ᵒC";
}
fahrenheitToCelsius(1);
```

4. 🎖The function below returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result:

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did parents allow you?");
  }
}
var age = prompt("Enter Your Age:");

if (checkAge(age)) {
  alert ("Access Granted");
} else {
  alert ("Acess Denied");
}
```
  4.1 🎖Convert the above function using ternary operator.
  
  ```js
  function checkAge(age) {
    return (age > 18) ? true : confirm("Did parents allow you?");
  }
    var age = +prompt("Enter your age");
    checkAge(age) ? alert("Access Granted") : alert("Access Denied");
  ```

  4.2 🎖Convert the above function using `||` operator.
  
  ```js
  function checkAge(age) {
    return (age>18) ? true || confirm("Did parents allow you?");
  }
    var age = +prompt("Enter your age");
    checkAge(age) ? alert("Access Granted") || alert("Access Denied");
  ```
  
  Will the function work differently if else is removed like below?
  
  ```js
  function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm("Did parents allow you?");
  }
  var age = prompt("Enter Your Age:");
  ```
  // Yes, It will work.
  
  Is there any difference in the behavior of these two variants? If there is what is that?


5. 🎖 Write a function pow(x,n) that returns x in power n.

  * [ ] Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
  * [ ] In this task the function should support only natural values of n: integers greater then 1.

```js
// Your code goes here
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result
}

var x = +prompt("Enter number x");
var n = +prompt("Enter number n");

if (n < 1) {
  alert ("The Number Below One is Not Allowed");
} else {
  alert ( pow(x, n) ); 
}
```

6. 🎖Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n. Return the result accordingly.

```js
var num1 = +prompt("Enter the 1st Number");
var num2 = +prompt("Enter the 2nd Number");

sum = num1 + num2;
product = num1 * num2;
var choice = prompt("Enter Your Choice (sum/product)")
if (choice == 'sum' || choice == 'Sum' || choice == "SUM") {
    alert("Sum = " +sum);
}
else if (choice == 'product' || choice == 'Product' || choice == 'PRODUCT') {
    alert("Product = " +product);
} else {
    alert("Please Enter Valid Choice");
} 
```

6. 🎖Write a program that asks the user for a number n using prompt and prints the sum of the numbers 1 to n

```js
var n = +prompt("Enter the Number");
var result = n;
for (let i = 1; i <= n; i++)
{
  result += i;
}
alert(result);
```

7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

```js
var n = +prompt("Enter the Number");
var result = 0;
for (let i = 1; i <= n; i++)
{
  if (i % 5 == 0  || i % 7 == 0) {
    result += i;
  }
}
console.log(result);
```

8. 🎖Write a function `min` that takes two arguments and returns their minimum.

```js
function min(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}
console.log(min(0, 10));
```
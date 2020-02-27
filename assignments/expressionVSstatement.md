# Expression vs Statement

## Write down if the code is valid or not with reason.

1. What is the output or error of the code below.

```js
function add(var a = 0,var b = 0){
  return a + b;
}
add(21, 23);
```
// Code is Invalid, There is no need to define the data type of a function argument.    
// Below is the right way
```js
function add(a = 0, b = 0){
  return a + b;
}
add(21, 23);
```

2. What is the output or error of the code below.

```js
function add(a = 0; b = 0) {
  return a + b;
}
add(21, 23);
```
//Code is Invalid, There is no need to add semicolon in function argument.    


3. What is the output or error of the code below.

```js
function add(a = 0, b = 0) {
  return a + b;
}
add(21, 23);
```
// Output - 44

4. What is the output or error of the code below.

```js
function add(a = 0, b = 0) {
  return a + b;
}
add(21);
```
// Output - NaN (b is undefined)

5. What is the output or error of the code below.

```js
function add(a = 0, b = 0) {
  return a + b;
}
add(undefined, 21);
```
// Output - 21

6. What is the output or error of the code below.

```js
function knowWhy(value) {
  return if(value === 21){
    return "Yes"
  } else {
    return "No"
  }
}
add(211);
```
// Output - Unexpected token 'if' (We cannot return if statement in a function)

7. What is the output or error of the code below.

```js
function isItIf(ifElse) {
  return ifElse;
}
add(if(true){console.log('Testing')});
```

// Output - Error
   1. Function Name (isItIf) and Function Invocation (add(...)) both are different
   2. We cannot pass if/else in function parameter 

# Class 2

# Immediately Invoked Function Expression (IIFE)

An IIFE in JavaScript is a function that is invoked or called immediately after it is defined.

# Code

```js
(function () {
    // statements
})();
```

> **IMPORTANT**
> The main reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world.
> if you have code that should not interface with other parts of your application (or to prevent global scope polution), IIFEs are a handy tool.

# ES7 - ES2016

## Exponential operator () - Used to raise the number to a power.

```js
(function () {
    function newPow(a,b){
        return a**b;
    }
    // a = 2 and b = 3
    // return 2*2*2 => 8
    const pow = (a,b) => a ** b
})();
```

## Array.prototype.includes: This method checks if a certain value is present in an array.

```js
(function () {
   let numbers = [1,2,3,4,5,6,7,8,9];
   numbers.includes(7) // true
   numbers.includes(17) // false
})();
```

# ES8 - ES2017 

## Object.values/Object.entries: Returns an array of a given object's own enumerable property values/returns an array containing all the [key, value] pairs of a given object's own enumerable string properties.


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

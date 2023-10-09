# Class 1

# ECMAScript

ECMAScript is a standardized scripting language specification that is used to implement JavaScript. It defines the syntax, semantics, and behavior of the JavaScript language. 

# ES6

- LET
- CONST

> **IMPORTANT**
> With let, a variable can be reassigned"
> With const, you cannot reassign, but it doesn't mean it's not immutable
> If the value of const is something 'mutable', like an array or an object, the internal data can be modified

# Scopes

In JavaScript, the scope is a concept that defines the accessibility or visibility of variables, functions, and objects in some particular area of your code during runtime. Essentially, it determines where these variables, functions, and objects can be accessed from. There are three types of scope in JavaScript

| Scope | Description |
|---|---|
| Global | Variables declared outside any function or curly brackets ({}) are in the global scope and can be accessed from any part of the code. |
| Function | Variables declared within a function using the var keyword are in the function scope and can only be accessed within that function or by other functions defined within that function. |
| Block  | Variables declared within a block (a set of curly brackets {}) using the let or const keyword are in the block scope and can only be accessed within that block. |

# Closures 

Closure gives you access to an outer function's scope from an inner function. Anytime you create a function inside another function, you have created a closure.

# Classes

A class defines properties (also known as attributes or fields) and methods (functions associated with the object). The properties are characteristics of objects, like a color or a brand, and methods are capabilities, such as moving or calculating.

Classes are a way of organizing and reusing code, especially when you're working with objects that have similar characteristics and behaviors. That's why it's essential in object-oriented programming.
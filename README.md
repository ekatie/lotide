# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ekatie/lotide`

**Require it:**

`const _ = require('@ekatie/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  * `head`: This function takes an array and returns the value for index 0.
  * `tail`: This function removes the first index (head) of the input array and returns the rest.
  * `middle`: This function takes in an array and returns it's middle value(s) - a single value if the length is odd, or two if the length is even.
  * `assertArraysEqual`: This function takes in two arrays, compares their values and prints to the console to indicate whether they match or not.
  * `assertEqual`: This function compares the actual output and expected output of other functions to test whether they are functioning as intended. It prints the result to the console.
  * `assertObjectsEqual`: This function prints out a message to indicate whether a function's actual object output matches the expected object output.
  * `countLetters`: This function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
  * `countOnly`: This function taken in an array and an object, and returns a count of only the array values that occur in the object.
  * `eqArrays`: This function compares 2 arrays are returns true or false based on whether there is a perfect match.
  * `eqObjects`: This function compares two objects and returns true if their keys and values are identical, or false if they are not.
  * `findKey`: This function takes in an object and a callback function and returns the key of the value that matches the callback function condition.
  * `findKeyByValue`: This function takes in an object and a value, then searches the object for the key of the indicated value.
  * `flatten`: This function takes in an array and flattens (combines) any nested arrays, returning an array without nested arrays.
  * `letterPositions`: This function will return all the indices (zero-based positions) in the string where each character is found.
  * `map`: This function takes in an array and a callback function and outputs a new array created with the callback function.
  * `takeUntil`: This function takes an array and adds its values to a new array until a certain condition input using a callback function is met.
  * `without`: This function takes in two arrays and removes the values in array 2 from array 1.
/*Your code must return true or false(not 'true' and 'false') depending upon 
whether the given number is a Narcissistic number in base 10.
This may be True and False in your language, e.g.PHP.
Error checking for text strings or other invalid inputs is not required, 
only valid positive non - zero integers will be passed into the function.*/

function narcissistic(value) {
  //const regexNumber = "^[0-9]"
  return value.split(/[0-9]/);
}

console.log(narcissistic("153"));
console.log(Math.pow(2, 0));

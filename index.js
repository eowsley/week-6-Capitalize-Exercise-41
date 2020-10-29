// DEFINE YOUR FUNCTION BELOW:
/*Function called capitalize that accepts a string argument and 
returns a new string w/the first letter capitalized*/

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(capitalize("luciana"));

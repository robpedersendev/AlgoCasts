// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Solution #1
  //   return str.split('').reverse().join('')

  // Solution #2
  //   let reversed = "";
  //   for (let character of str) {
  //     reversed = character + reversed;
  //   }
  //   return reversed;

  // Solution #3.1 ES 5.1
  //   return str.split("").reduce((reversed, character) => {
  //     return character + reversed;
  //   }, "");

  // Solution #3.2 ES 2015+
  debugger;
  return str.split("").reduce((rev, char) => char + rev, "");
}

reverse("asdf");
module.exports = reverse;

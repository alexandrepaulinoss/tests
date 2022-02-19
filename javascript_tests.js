/*
Some exercises in javascript using arrow functions

You can test it in:
	- https://playcode.io/new/
	- https://www.typescriptlang.org/play
	- https://runjs.app/

Expected outcome:
  - Hello world
  - var1 = b var2 = a var3 = c var4 = 1
  - var1 = a var2 = b var3 = c var4 = 1
  - ["1","2","1","2"]
  - drow olleH
  - The longestWord word is occurrence
*/

//Just a "Hello world"
const message = 'Hello world'
console.log(message)

//Parameters (tip: use max 3 parameters)
const test = (var1, var2, var3, var4) => `var1 = ${var1} var2 = ${var2} var3 = ${var3} var4 = ${var4}`
console.log(test("b", "a", "c", 1))

//Parameters (object)
const test2 = ({var1, var2, var3, var4}) => `var1 = ${var1} var2 = ${var2} var3 = ${var3} var4 = ${var4}`
console.log(test2({var2: "b", var1: "a", var3: "c", var4: 1}))

//Replicate an array
const replicateArray = myArray => myArray.concat(myArray);
console.log(replicateArray(['1','2']))

//Reverse string
const reverseString = myString => myString.split("").reverse().join("")
console.log(reverseString("Hello word"))

//Return the longest word in a sentense
const longestWord = mySentense => {
  const sentenseAsArray = mySentense.split(" ")
  let word = ""

  sentenseAsArray.forEach((arrayItem) => word = arrayItem.length > word.length ? arrayItem: word)
  return word
}
console.log(`The longestWord word is ${longestWord("Hello word! This test should return the first occurrence of the longest word. In this case: occurrenc#")}`)

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



/*Return the number of times digit appears in the squares of the sequence 1..n.

   Example:
    count_digits(10, 1) = 4
    # 1, 2, 3, 4, ..., 9, 10 --> 1, 4, 9, 16, ..., 81, 100
*/
// return 0
const countDigits = (n, digit) => {

    let digitCount = 0;

    for (let i = 0; i <= n; i++) {
      const square = Math.pow(i, 2);

      for (let j = 0; j <= String(square).length; j++) {
          (String(square).substring(j, j+1)) === String(digit) && digitCount++
      }
    }

    return digitCount;
}

console.log(countDigits(10, 1), ' = 4')
console.log(countDigits(10, 2), ' = 1')
console.log(countDigits(10, 3), ' = 1')
console.log(countDigits(10, 4), ' = 3')
console.log(countDigits(10, 5), ' = 1')
console.log(countDigits(10, 6), ' = 3')
console.log(countDigits(10, 7), ' = 0')
console.log(countDigits(10, 8), ' = 1')
console.log(countDigits(10, 9), ' = 2')
console.log(countDigits(10, 0), ' = 3')



/*Return 'Balanced' if `n` is a 'balanced' number, otherwise 'Not Balanced'.

 Balanced number: a number that if reversed, equals itself.

 Examples of balanced numbers:
     1
     121
     12321
*/
// return 'Not Balanced'
const balancedNum = (n) => {
  return String(n) === String(n).split('').reverse().join('') ? 'Balanced' : 'Not Balanced';
}
console.log(balancedNum(1), '= balanced')
console.log(balancedNum(123), '= Not Balanced')
console.log(balancedNum(12321), '= balanced')
console.log(balancedNum(12321), '= Balanced')
console.log(balancedNum(123421), '= Not Balanced')
console.log(balancedNum(123454321), '= Balanced')
console.log(balancedNum(121), '= Balanced')



/*Return True if the count of the even members of `numbers` add up to the count
 of the odd members, otherwise return False.

 Example:
     1, 1         ->   False
     1, 2, 2, 1   ->   True
     1, 1, 2      ->   False
*/
// return false
const evenWeights = (numbers) => {
  let evenNumbers = 0;
  let oddNumbersSum = 0;

  numbers.forEach((number) => {
    (number % 2 === 0) ?  evenNumbers++ : oddNumbersSum = oddNumbersSum + number;
  })
  return evenNumbers === oddNumbersSum;
}
console.log(evenWeights([1,1]), ' = false');
console.log(evenWeights([1,2,4,1]), ' = true');
console.log(evenWeights([1,2,2]), ' = false');
console.log(evenWeights([3,3]), ' = false');
console.log(evenWeights([3,4,8,3]), ' = false');
console.log(evenWeights([3,4,4]), ' = false');
console.log(evenWeights([1,2,2,1,1,1,1,2]), ' = false');
console.log(evenWeights([1,2,2,1,1,2]), ' = true');

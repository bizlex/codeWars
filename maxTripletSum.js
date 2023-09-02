function maxTriSum(numbers) {
  let count = 3
  let triple = 0
  while (count > 0) {
    triple += Math.max(...numbers)
    numbers = numbers.filter((item) => item !== Math.max(...numbers))
    count--
  }
  return triple
}

console.log(maxTriSum([2,9,13,10,5,2,9,5,-1,-11]))
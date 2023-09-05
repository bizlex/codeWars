function minSum(arr) {
  const reversedArray = arr.sort((a, b) => b - a).map((item) => item)
  const sumArray = arr.sort((a, b) => a - b).map((item, index) => item * reversedArray[index])
  return sumArray.reduce((acc, value) => acc + value, 0) / 2
}

console.log(minSum([12,6,10,26,3,24]))
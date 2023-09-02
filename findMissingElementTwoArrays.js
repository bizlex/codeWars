function findMissing(arr1, arr2) {
  return arr1.sort().find((item, index) => item !== arr2.sort()[index])
}

console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]))
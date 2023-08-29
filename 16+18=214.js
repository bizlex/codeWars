function add(num1, num2) {
  const arrayFirst = num1.toString().split('')
  const arraySecond = num2.toString().split('')
  const maxLength = Math.max(arrayFirst.length, arraySecond.length)

  const normalizeArrayFirst = arrayFirst.length < maxLength ? Array(maxLength - arrayFirst.length).fill('0').concat(arrayFirst) : arrayFirst
  const normalizeArraySecond = arraySecond.length < maxLength ? Array(maxLength - arraySecond.length).fill('0').concat(arraySecond) : arraySecond

  const matrix = [normalizeArrayFirst, normalizeArraySecond]
  const neededArray = matrix.reduce((a, b) => a.map((value, index) => Number(value) + Number(b[index])))

  return parseInt(neededArray.toString().split(',').join(''))
}
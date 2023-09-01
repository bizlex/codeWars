function combine(...args) {
  const result = {}
  args.forEach((item) => {
    for (let [key, value] of Object.entries(item)) {
      result[key] ? result[key] += value : result[key] = value
    }
  })
  return result
}

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { }

console.log(combine(objA, objB))
function nbDig(n, d) {
  let count = 0
  for (let i = 0; i < n + 1; i++) {
    let digit = i * i
    for (let char of digit.toString()) {
      if (char === d.toString()) {
        count++
      }
    }
  }
  return count
}

console.log(nbDig(10, 1))
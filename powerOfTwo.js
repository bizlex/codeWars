function isPowerOfTwo(n) {
  for (let i = 0; i < n + 1; i++) {
    if (2 ** i === n) {
      return true
    }
  }
  return false
}

console.log(isPowerOfTwo(8))

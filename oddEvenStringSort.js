function sortMyString(s) {
  let even = ''
  let odd = ''
  for (let i = 0; i < s.length; i++) {
    i % 2 ? odd += s[i] : even += s[i]
  }
  return even + ' ' + odd
}

console.log(sortMyString('CodeWars'))
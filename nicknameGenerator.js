function nicknameGenerator(name) {
  if (name.length < 4) {
    return 'Error: Name too short'
  }

  let isVowel = false
  for (let char of 'aeiou') {
    if (char === name[2]) {
      isVowel = true
    }
  }
  return isVowel ? name.slice(0, 4) : name.slice(0, 3)
}

console.log(nicknameGenerator('Jennie'))
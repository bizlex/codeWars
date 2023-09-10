function vowelOne(s) {
  return s.replace(/[^aeiouAEIOU]/g, '0').replace(/[^0]/g, '1')
}

console.log(vowelOne('123000, arou'))
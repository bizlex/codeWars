const Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
}

function convert(input, source, target) {
  const sourceBase = source.length;
  const targetBase = target.length;
  
  let integer = 0;
  
  if (source === Alphabet.DECIMAL) {
    integer = parseInt(input, 10);
  } else {
    for (let i = input.length - 1; i >= 0; i -= 1) {
      const char = input[i];
      const multiplier = Math.pow(sourceBase, input.length - 1 - i);
      
      let value = source.indexOf(char);
      integer += value * multiplier;
    }
  }
  
  let out = [integer];
  const isValidTargetBaseNumber = (arr) => arr.every(x => x < targetBase);
  
  while (!isValidTargetBaseNumber(out)) {
    // console.log(out);
    const newOut = [];
    
    for (let i = 0; i < out.length; i += 1) {
      const current = out[i];
      
      if (current < targetBase) {
        newOut.push(current);
      } else {
        const multiplier = Math.floor(current / targetBase);
        const remainder = current % targetBase;
        newOut.push(multiplier);
        newOut.push(remainder);
      }
    }
    
    out = newOut;
  }
  
  return out.map(i => target[parseInt(i, 10)]).join('');
}

// convert("15", Alphabet.DECIMAL, Alphabet.BINARY)
console.log(convert("26", Alphabet.DECIMAL, Alphabet.ALPHA));
// convert("1010", Alphabet.BINARY, Alphabet.DECIMAL)
// convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL)
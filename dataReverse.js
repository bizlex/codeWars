function dataReverse(data) {
  const times = data.length / 8
  let bitArray = []
  for (let i = 0; i < times; i++) {
    bitArray.unshift(...data.splice(0, 8))
  }
  return bitArray
}

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))
function strCount(obj) {
  let count = 0
  for (let value in obj){
    if(typeof obj[value] === 'object') {
      count += strCount(obj[value])
    }

    if (typeof obj[value] === 'string') {
      count++
    }
  }
  return count
}

console.log(
  strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:  null
  })
)
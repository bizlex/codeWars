function colourAssociation(array) {
  return array.map((item) => ({ [item.at(0)]: item.at(1) }))
}

const array = [["white", "goodness"], ["blue", "tranquility"]]
console.log(colourAssociation(array))
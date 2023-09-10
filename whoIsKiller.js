function killer(suspectInfo, dead) {
  return Object.keys(suspectInfo).find((name) => dead.every((suspectName) => suspectInfo[name].includes(suspectName)))
}

console.log(
  killer(
    {
      'Age': ['Lucy', 'Kyle', 'Bill'],
      'James': ['Jacob', 'Bill', 'Lucas'],
      'Johnny': ['David', 'Kyle', 'Lucas'],
      'Peter': ['Lucy', 'Kyle']
    },
    ['Lucas', 'Bill']
  )
)

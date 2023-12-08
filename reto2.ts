function manufacture(gifts, materials) {
  const result:Array<string> = []

  for (const gift of gifts){
    let found:boolean = true
    for (const character of gift){
      if (materials.indexOf(character) == -1){
        found = false
      }
    }
    if (found){
      result.push(gift)
    }
  }
  // Code here
  return result
}

const gifts = ['libro', 'ps5']
const materials = 'libro'

console.log(manufacture(gifts, materials)) // ["tren", "oso"]
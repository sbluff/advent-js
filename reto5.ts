function cyberReindeer(road, time) {
  const replaceAt = ((text:string, index: number, replacement: string): string => {
    return text.substring(0, index) + replacement + text.substring(index + replacement.length);
  })

  let position_item = ''
  let position = 0
  const movement:Array<string> = []
  for (let i = 0; i < time; i++){


    // store the road state 
    position_item = (i == 0) ? '.' : road[position]
    road = replaceAt(road, position, 'S')
    movement.push(road)
    road = replaceAt(road, position, position_item)
    
    // after 5 steps the gates open
    if (i == 4){
      road = road.replaceAll("|", "*")
    }

    // if the sled reaches the last position it won't move
    if (position+1 < road.length && road[position+1] != '|'){
      position++
    }
  }

  return movement
}

const road = 'S..|...|..'
const time = 15 // unidades de tiempo
let path = cyberReindeer(road, time)
console.log(path)
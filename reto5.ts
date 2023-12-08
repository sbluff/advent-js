function cyberReindeer(road, time) {
  let position = 0
  const movement:Array<string> = []
  for (let i = 0; i < time; i++){
    // store the road state 
    let position_item = (i == 0) ? '.' : road[position]
    let text_left = road.substring(0, position)
    let text_right = road.substring(position + 1)
    road = text_left + 'S' + text_right
    movement.push(road)
    road = text_left + position_item + text_right
    
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
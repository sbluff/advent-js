function maxDistance(movements) {
  let distance = 0, both_counter = 0
  for (let movement of movements){
    if (movement == '>'){
      distance++
    }
    else if (movement == '<'){
      distance--
    }
    else if (movement == '*'){
      both_counter++
    }
  }

  distance = (distance >= 0) ? distance + both_counter : distance - both_counter
  return Math.abs(distance)
}

console.log(maxDistance('>>*<'))
console.log(maxDistance('<<<>'))
console.log(maxDistance('>***>'))
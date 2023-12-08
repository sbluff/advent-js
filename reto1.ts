function findFirstRepeated(gifts) {
  var ids:Array<number> = []

  for (var gift_id of gifts){
    if (ids.indexOf(gift_id) !== -1){
      return gift_id
    }
    else{
      ids.push(gift_id)
    }
  }

  return -1
  
}

const giftIds = [5, 1, 5, 1]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId)
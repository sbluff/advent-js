function organizeGifts(gifts): string {
  interface GiftWrapping{
    type: string,
    count: number,
  }

  const Represent = (gift: GiftWrapping):string => {
    const boxes = Math.floor(gift.count / 10) 
    const bags = gift.count % 10

    let boxes_representation = '', bag_representation = ''
    let pales = Math.floor(boxes / 5)
    boxes_representation += (pales != 0) ? '[' + RepeatString(gift['type'], pales) + ']' : ''
    boxes_representation += (boxes%5 != 0) ? RepeatString('{' + gift['type']+ '}', boxes % 5) : ''
    bag_representation += '(' + RepeatString(gift['type'], bags) + ')'
    
    return boxes_representation + bag_representation
  }

  const RepeatString = (str: string, num: number): string => {
    let result = ''
    for (let i = 0; i < num; i++){
      result += str 
    }
    return result
  }


  const organized_gifts: {[key: string]: GiftWrapping} = {}
  let start_index = 0                                       //to get the substrings 
  for (let i = 0; i < gifts.length; i++){
    if (gifts[i].match(/[a-z]/i)){
      let quantity = gifts.substring(start_index, i) 
      let type = gifts[i] 
      organized_gifts[type] = {type: type, count: quantity}
      start_index = i + 1
    }
  }

  let result = ''
  for (let key in organized_gifts){
    result += Represent(organized_gifts[key])
  }
  return result
  // Code here
}

const result1 = organizeGifts(`76a11b`)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'
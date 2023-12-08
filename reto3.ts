function findNaughtyStep(original, modified) {
  if (original == modified) // no change
    return ''


  else{
    
    let [long_string, short_string] = (original.length > modified.length) ? [original, modified] : [modified, original] 

    for (let character of long_string){
      let index = short_string.indexOf(character) 

      if (index === -1) 
        return character

      else 
        short_string = short_string.slice(0, index) + short_string.slice(index+1)     
    }
  }  

  return
}

const original = 'abcd'
const modified = 'abcde'
const result = findNaughtyStep(original, modified) // 'e'

console.log(result)
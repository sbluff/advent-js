function createChristmasTree(ornaments:string, height) {
  let result: string = ""
  let index = 0
  let line_lenght = 2*height - 1

  for (let i = 0; i < height; i++){             //one iteration -> one line
    let char_line = 1 + i                       // characters per line
    let start = ((height-i-1)%2 == 0) ?  'even' : 'odd'
    let padding = height - char_line
    
    for (let j = 0; j < line_lenght; j++){
      let position_type = (j % 2 == 0) ? 'even' : 'odd' 
      let print_condition = (j >= padding && j <= line_lenght - padding && start === position_type)

      if (print_condition){
        result += ornaments[index % ornaments.length]
        index++
        char_line--
      }
      else{
        result += ' '
      }
    }
    result += '\n'
  }



  for(let i = 0; i < line_lenght; i++){
    result += (i == Math.floor(line_lenght/2)) ? '|' : ' ' 
  }
  result += '\n'
  console.log(result)
  return result
}

createChristmasTree('🎄', 60)
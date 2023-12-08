function decode(message) {
  const reverse = (s: string) => {
    let reverse_string = ''
    for (let char of s){
      reverse_string = char + reverse_string
    }
    return reverse_string
  }

  let open_index, close_index, i = 0
  while (i < message.length){  
    if (message[i] == '('){
      open_index = i
      i++
    }

    else if (message[i] == ')'){
      close_index = i
      let reversed = reverse(message.slice(open_index+1, close_index))
      message = message.slice(0, open_index) + reversed + message.slice(close_index+1, message.length)
      i = 0
    }

    else
      i++
    
  }

  return message
}

const a = decode('(atna(s))')
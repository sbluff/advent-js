function adjustLights(lights){
  if (lights.length == 0)
    return 0

  const counter = {
    forward: 0,
    backward: 0,
  }

  for (const mode in counter){
    let reverse_color = lights[0] === '🟢' ? '🔴' : '🟢' 
    let expected_color = (mode === 'forward') ? lights[0] : reverse_color;

    for (let i = 0; i < lights.length; i++){
      if (lights[i] !== expected_color){
        counter[mode] += 1
      }
  
      expected_color = (expected_color === '🟢') ? '🔴' : '🟢' 
    } 
  }

  return Math.min(counter.forward, counter.backward)
}

let a = adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
console.log(a)

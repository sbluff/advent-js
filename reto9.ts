function adjustLights(lights){
  if (lights.length == 0)
    return 0

  let expected_color = lights[0], counter = 0;
  for (let i = 0; i < lights.length; i++){
    if (lights[i] !== expected_color){
      counter += 1
    }

    expected_color = (expected_color === '🟢') ? '🔴' : '🟢' 
  } 

  let counter_reverse = 0 
  expected_color = (lights[0] === '🟢') ? '🔴' : '🟢' 
  for (let i = 0; i < lights.length; i++){
    if (lights[i] !== expected_color){
      counter_reverse += 1
    }

    expected_color = (expected_color === '🟢') ? '🔴' : '🟢' 
  }

  return Math.min(counter, counter_reverse)
}

adjustLights(['🔴', '🔴', '🔴'])

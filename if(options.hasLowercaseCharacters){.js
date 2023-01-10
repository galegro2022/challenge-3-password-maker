if(options.hasLowercaseCharacters){
    possiblecharacters.concat(lowerCasedCharacters)
    guranteedcharacters.push(getrandom(lowerCasedCharacters))

  }

  if(options.hasUppercaseCharacters){
    possiblecharacters.concat(upperCasedCharacters)
    guranteedcharacters.push(getrandom(upperCasedCharacters))
  }

  if(options.hasSpecialCharacters) {
    possiblecharacters.concat(specialCharacters)
    guranteedcharacters.push(getrandom(specialCharacters))
  }
  }

  if(options.numericCharacters){
    possiblecharacters.concat(NumericCharacters)
    guranteedcharacters.push(getrandom(numericCharacters))
  }

  for (var i=0, i< 0) i < options.length; i++)( 
    var possiblecharacter =getrandom(possiblecharacters)
    result.push(possiblecharachter)
  )
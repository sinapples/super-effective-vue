function addAnd(list, addComma = true) {
  list = list.filter(Boolean)
  const numberOfItems = list.length

  if (numberOfItems === 0) {
    return ''
  }

  let ret = ''
  const comma = addComma ? ',' : ''

  for (let i = 0; i < numberOfItems; i += 1) {
    ret += ' '
    if (i === numberOfItems - 2 && !(numberOfItems <= 1)) {
      ret = `${ret + list[i] + comma} and`
    } else if (numberOfItems > 1 && i !== numberOfItems - 1) {
      ret = `${ret + list[i] + comma}`
    } else {
      ret += list[i]
    }
  }

  return ret.trim()
}

function addOr(list) {
  list = list.filter(Boolean)
  const numberOfItems = list.length

  if (numberOfItems === 0) {
    return ''
  }

  let ret = ''

  for (let i = 0; i < numberOfItems; i += 1) {
    ret += ' '
    if (i === numberOfItems - 2 && !(numberOfItems <= 1)) {
      ret = `${ret + list[i]}, or`
    } else if (numberOfItems > 1 && i !== numberOfItems - 1) {
      ret = `${ret + list[i]},`
    } else {
      ret += list[i]
    }
  }

  return ret.trim()
}

function singularPlural(count) {
  if (count[2] > 1) {
    return count[0]
  }
  if (count[2] === 1) {
    return count[1]
  }
  return ''
}

function capitalize(text) {
  if (text.charAt(0) === ' ') {
    return ` ${text.charAt(1).toUpperCase()}${text.substring(2)}`
  }
  return text.charAt(0).toUpperCase() + text.substring(1)
}

function removeLast(text) {
  if (
    text.charAt(text.length - 1) === ',' ||
    text.charAt(text.length - 1) === ' '
  )
    text = text.substring(0, text.length - 1)
  return text
}

function capitalizeWords(text) {
  const words = text.split(' ')
  let ret = ''

  Object.keys(words).forEach(i => {
    ret += `${capitalize(words[i])} `
  })

  return removeLast(ret)
}

function titleCase(text) {
  const noCap = ['and', 'the', 'or']
  let ret = ''
  text = text.trim()
  text = text.split(' ')

  Object.keys(text).forEach(i => {
    if (!noCap.includes(text[i])) {
      ret += `${capitalize(text[i])} `
    } else {
      ret += `${text[i]} `
    }
  })

  return capitalize(ret.trim())
}

module.exports = {
  singularOrPlural: singularPlural,
  addAnd,
  addOr,
  capitalize: capitalizeWords,
  titleCase,
  removeLastComma: removeLast,
  capitalizeWords
}

// console.log(singularPlural(0 ,"This type","These types") );
// console.log("use"+ addAnd(["water" ]) );
// console.log(capitalize("hello world") );
// console.log(titleCase("the hello  the moo and world") );
// console.log(titleCase("wooloo") );

// function addAnd(text) {
//   list = list.filter(Boolean)
//   const numberOfItems = list.length

//   if (numberOfItems == 0) {
//     return ''
//   }

//   let ret = ''

//   for (let i = 0; i < numberOfItems; i++) {
//     ret += ' '
//     if (i == numberOfItems - 2 && !(numberOfItems <= 1)) {
//       ret = `${ret + list[i]}, and`
//     } else if (numberOfItems > 1 && i != numberOfItems - 1) {
//       ret = `${ret + list[i]},`
//     } else {
//       ret += list[i]
//     }
//   }

//   return ret.trim()
// }

// function addOr(text) {
//   list = list.filter(Boolean)
//   const numberOfItems = list.length

//   if (numberOfItems == 0) {
//     return ''
//   }

//   let ret = ''

//   for (let i = 0; i < numberOfItems; i++) {
//     ret += ' '
//     if (i == numberOfItems - 2 && !(numberOfItems <= 1)) {
//       ret = `${ret + list[i]}, or`
//     } else if (numberOfItems > 1 && i != numberOfItems - 1) {
//       ret = `${ret + list[i]},`
//     } else {
//       ret += list[i]
//     }
//   }

//   return ret.trim()
// }

// function singularPlural(text) {
//   if (count > 1) {
//     return plural
//   }
//   if (count == 1) {
//     return singular
//   }
//   return ''
// }

// function capitalizeWords(text) {
//   const words = text.split(' ')
//   let ret = ''
//   for (const i in words) {
//     ret += `${capitalize(words[i])} `
//   }

//   return removeLast(ret)
// }

// function capitalize(text) {
//   if (text.charAt(0) === ' ') {
//     return ` ${text.charAt(1).toUpperCase()}${text.substring(2)}`
//   }
//   return text.charAt(0).toUpperCase() + text.substring(1)
// }

// function titleCase(text) {
//   const noCap = ['and', 'the', 'or']
//   let ret = ''
//   text = text.trim()
//   text = text.split(' ')
//   for (const i in text) {
//     if (!noCap.includes(text[i])) {
//       ret += `${capitalize(text[i])} `
//     } else {
//       ret += `${text[i]} `
//     }
//   }

//   return capitalize(ret.trim())
// }

// function removeLast(text) {
//   if (
//     text.charAt(text.length - 1) === ',' ||
//     text.charAt(text.length - 1) === ' '
//   )
//     text = text.substring(0, text.length - 1)
//   return text
// }

// module.exports = {
//   singularOrPlural: singularPlural,
//   addAnd,
//   addOr,
//   capitalize: capitalizeWords,
//   titleCase,
//   removeLastComma: removeLast,
//   capitalizeWords
// }

// // console.log(singularPlural(0 ,"This type","These types") );
// // console.log("use"+ addAnd(["water" ]) );
// // console.log(capitalize("hello world") );
// // console.log(titleCase("the hello  the moo and world") );
// // console.log(titleCase("wooloo") );

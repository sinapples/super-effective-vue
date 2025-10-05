const typetable = require('./effectiveness')
const grammar = require('./languageUtils')

const pokedex = require('./pokedex.json')

function allPokemon() {
  return Object.keys(pokedex)
}
function getTypes(name) {
  name = grammar.capitalize(name)

  if (!Object.prototype.hasOwnProperty.call(pokedex, name)) {
    return null
  }

  return pokedex[name].types
}

function getEffectiveness(name) {
  const type = getTypes(name)

  if (!type) {
    return null
  }

  const type1 = type[0]
  const type2 = type.length > 1 ? type[1] : ''

  return typetable.getEffectiveness(type1, type2)
}
// function getRegionalForm(name) {
//   // Alolan from stuff

//   name = grammar.capitalize(name)
//   const region = [
//     'Alolan',
//     'Alola',
//     'Hello',
//     'Hola',
//     'Aloha',
//     'A Low A',
//     'A Low Win',
//     'Galarian',
//     'Galar Win',
//     'galorian',
//     'Galar',
//     'galer'
//   ]
//   const regionAlolan = [
//     'Alolan',
//     'Alola',
//     'Hello',
//     'Hola',
//     'Aloha',
//     'A Low A',
//     'A Low Win'
//   ]
//   const regionGalarian = ['Galarian', 'Galar Win', 'galorian', 'Galar', 'galer']

//   // console.log("#\n#\n#\n#\n#\n#\n#@@@@@@"+name+"#\n#\n#\n#\n#\n#\n#")
//   for (const i in region) {
//     if (name.includes(region[i])) {
//       console.log(region[i])
//       const form = regionAlolan.includes(region[i]) ? 'Alolan' : 'Galarian'
//       const pokemonName = name.replace(region[i], '').trim()
//       name = `${form} ${pokemonName}`
//       // console.log("#\n#\n#\n#\n#\n#\n#"+name+"#\n#\n#\n#\n#\n#\n#")
//       break
//     }
//   }

//   return name
// }
module.exports = {
  getEffectiveness,
  getTypes,
  allPokemon
}

const typeTable = {
  normal: { fighting: 2, ghost: 0 },
  fighting: { flying: 2, rock: 0.5, bug: 0.5, psychic: 2, dark: 0.5, fairy: 2 },
  flying: {
    ice: 2,
    electric: 2,
    rock: 2,
    fighting: 0.5,
    ground: 0,
    bug: 0.5,
    grass: 0.5
  },
  poison: {
    ground: 2,
    psychic: 2,
    fighting: 0.5,
    poison: 0.5,
    bug: 0.5,
    grass: 0.5,
    fairy: 0.5
  },
  ground: { water: 2, grass: 2, ice: 2, electric: 0, poison: 0.5, rock: 0.5 },
  rock: {
    fighting: 2,
    ground: 2,
    water: 2,
    grass: 2,
    steel: 2,
    normal: 0.5,
    flying: 0.5,
    poison: 0.5,
    fire: 0.5
  },
  bug: { fighting: 0.5, flying: 2, ground: 0.5, rock: 2, fire: 2, grass: 0.5 },
  ghost: { normal: 0, fighting: 0, poison: 0.5, bug: 0.5, ghost: 2, dark: 2 },
  steel: {
    fire: 2,
    fighting: 2,
    ground: 2,
    normal: 0.5,
    flying: 0.5,
    poison: 0,
    rock: 0.5,
    bug: 0.5,
    steel: 0.5,
    grass: 0.5,
    psychic: 0.5,
    ice: 0.5,
    dragon: 0.5,
    fairy: 0.5
  },
  fire: {
    ground: 2,
    rock: 2,
    water: 2,
    bug: 0.5,
    steel: 0.5,
    fire: 0.5,
    grass: 0.5,
    ice: 0.5,
    fairy: 0.5
  },
  water: { steel: 0.5, fire: 0.5, water: 0.5, grass: 2, electric: 2, ice: 0.5 },
  grass: {
    flying: 2,
    poison: 2,
    bug: 2,
    fire: 2,
    ice: 2,
    ground: 0.5,
    water: 0.5,
    grass: 0.5,
    electric: 0.5
  },
  electric: { flying: 0.5, ground: 2, steel: 0.5, electric: 0.5 },
  psychic: { fighting: 0.5, bug: 2, ghost: 2, psychic: 0.5, dark: 2 },
  ice: { fighting: 2, rock: 2, steel: 2, fire: 2, ice: 0.5 },
  dragon: {
    fire: 0.5,
    water: 0.5,
    grass: 0.5,
    electric: 0.5,
    ice: 2,
    dragon: 2,
    fairy: 2
  },
  dark: { fighting: 2, bug: 2, ghost: 0.5, psychic: 0, dark: 0.5, fairy: 2 },
  fairy: { fighting: 0.5, poison: 2, bug: 0.5, steel: 2, dragon: 0, dark: 0.5 }
}
function sortEffectiveness(json, type, effectiveness) {
  // console.log("sorting " + type + " " + effectiveness )
  switch (effectiveness) {
    case 4:
      json.max[type] = effectiveness
      break
    case 2:
      json.super[type] = effectiveness
      break
    case 1:
      break
    case 0:
      json.noEffect[type] = effectiveness
      break
    default:
      json.notVery[type] = effectiveness
  }
}
function superEffective(type1, type2) {
  type1 = type1.toLowerCase() ? type1.toLowerCase() : type2.toLowerCase()
  type2 = type2.toLowerCase()

  console.log(`${type1} ${type2}`)

  const effectiveTable = {
    max: {},
    super: {},
    notVery: {},
    noEffect: {}
  }
  const counters = {}

  const typeMap1 = typeTable[type1]
  const typeMap2 = typeTable[type2]

  Object.keys(typeMap1).forEach(type => {
    if (typeMap2 && typeMap2[type]) {
      const effectiveness = typeMap1[type] * typeMap2[type]
      if (effectiveness !== 1) {
        // addEffectiveness(counters, type, effectiveness);
        counters[type] = effectiveness
      }
    } else {
      // addEffectiveness(counters, type, typeMap1[type]);
      counters[type] = typeMap1[type]
    }
  })

  // for (const type in typeMap1) {
  //   if (typeMap2 && typeMap2[type]) {
  //     const effectiveness = typeMap1[type] * typeMap2[type]
  //     if (effectiveness !== 1) {
  //       // addEffectiveness(counters, type, effectiveness);
  //       counters[type] = effectiveness
  //     }
  //   } else {
  //     // addEffectiveness(counters, type, typeMap1[type]);
  //     counters[type] = typeMap1[type]
  //   }
  // }

  // if theres a dual type
  if (type2) {
    Object.keys(typeMap2).forEach(type => {
      // console.log(type)
      // console.log(typeMap1[type])
      if (typeMap1[type] !== null) {
        const effectiveness = typeMap1[type] * typeMap2[type]
        console.log(`  >>${effectiveness}`)
        if (effectiveness !== 1) {
          //  addEffectiveness(counters, type, effectiveness);
          counters[type] = effectiveness
        }
      } else {
        // console.log("  >>")
        //  addEffectiveness(counters, type, typeMap2[type]);
        counters[type] = typeMap2[type]
      }
      // console.log();
    })
  }

  // for (const type in counters) {
  Object.keys(counters).forEach(type => {
    sortEffectiveness(effectiveTable, type, counters[type])
  })

  console.log(`${type1} ${type2}:`)
  console.log(JSON.stringify(effectiveTable, null, 2))
  return effectiveTable
}

module.exports = {
  getEffectiveness: superEffective
}

// console.log();
// console.log("type table working: " + typeTable.working);
// superEffective("bug", "steel");
// superEffective("ghost", "steel");
// superEffective("ground","flying");
// superEffective("normal", "fighting");
// console.log();

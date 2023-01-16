const fs = require('fs')

const ret = {}

const typeList = [
  'Normal',
  'Fire',
  'Water',
  'Grass',
  'Electric',
  'Ice',
  'Fighting',
  'Poison',
  'Ground',
  'Flying',
  'Psychic',
  'Bug',
  'Rock',
  'Ghost',
  'Dark',
  'Dragon',
  'Steel',
  'Fairy'
]
fs.readFile('inputScraper.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  //   console.log(data)
  data = data.split('\n')

  let number = null
  let name = null
  let type = null
  for (let i = 0; i < data.length; i += 1) {
    const line = data[i]
    if (line.includes('sprite')) {
      // eslint-disable-next-line no-continue
      continue
    } else if (line.indexOf('#') > -1) {
      number = parseInt(line.split('#')[1], 10)
    } else if (line.indexOf(' · ') > -1) {
      type = line.split(' · ')
    } else if (typeList.indexOf(line) > -1) {
      type = [line]
    } else {
      name = line
    }

    if (name && number && type) {
      //   console.log(`${name} ${number} ${type}`)
      ret[name] = {
        number,
        types: type
      }

      name = null
      type = null
      number = null
    }
    fs.writeFileSync('outputFile.json', JSON.stringify(ret))
    // console.log(ret)
  }
})

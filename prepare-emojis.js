const fs = require('fs')
const path = process.cwd()

const rawinput = fs.readFileSync(path + "/emojis.txt").toString()
let emojis = rawinput.split("\n")

emojis = emojis.filter(line => line[0] != "#" && line.length > 10) //maybe check for unqualified
emojis = emojis.map(line => line.split("#")[1].substr(1))
emojis = emojis.map(line => {
    let parts = line.split(" ")
    let emoji = parts[0]
    parts.shift()
    return [emoji, parts]
})

fs.writeFileSync(path + "/emojis.js", "const emoji = " + JSON.stringify(emojis))
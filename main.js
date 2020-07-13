let input, sarcasm, i, length
let ff = true
let textbox = document.getElementById('input')
let slider = document.getElementById('randomslider')

let smallLetters = ["ᵃ", "ᵇ", "ᶜ", "ᵈ", "ᵉ", "ᶠ", "ᵍ", "ʰ", "ⁱ", "ʲ", "ᵏ", "ˡ", "ᵐ", "ⁿ", "ᵒ", "ᵖ", "ᵠ", "ʳ", "ˢ", "ᵗ", "ᵘ", "ᵛ", "ʷ", "ˣ", "ʸ", "ᶻ"]
let smallNumbers = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"]

function getEmoji(keyword) {
    let candidates = emoji.filter(entry => entry[1].join(" ").indexOf(keyword.toLowerCase()) >= 0)
    return candidates.length > 0 ? candidates[0][0] : " " //Math.floor(Math.random() * candidates.length)
}

function update() {
    sarcasm = ''
    small = ''

    let sarcasmAmount = slider.value / 100
    let input = textbox.value
    length = input.length

    for (i = 0; i < length; i++) {
        let char = input.charAt(i)
        let lchar = char.toLowerCase()

        sarcasm += (ff ? i % 2 == 0 : Math.random() > sarcasmAmount) ? char.toLowerCase() : char.toUpperCase()

        if (/([a-z])/.test(lchar)) small += smallLetters[lchar.charCodeAt(0) - 97]
        else if (/([0-9])/.test(char)) small += smallNumbers[char]
        else small += lchar
    }

    let withEmoji = input.split(" ")
    withEmoji = withEmoji.map(word => word + getEmoji(word))

    document.getElementById('sarcasm').innerHTML = sarcasm
    document.getElementById('small').innerHTML = small
    document.getElementById('monospace').innerHTML = input.toUpperCase().split("").join(" ")
    document.getElementById('emoji').innerHTML = withEmoji.join(" ")
    document.getElementById('uwu').innerHTML = input.replace(/[prl]/g, "w")
}

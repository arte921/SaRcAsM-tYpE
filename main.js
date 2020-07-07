let input, sarcasm, i, length
let ff = true
let textbox = document.getElementById('input')
let slider = document.getElementById('randomslider')

function update () {
  sarcasm = ''
  small = ''

  let sarcasmAmount = slider.value / 100
  let input = textbox.value
  length = input.length

  for (i = 0; i < length; i++) {
    let char = input.charAt(i)
    sarcasm += (ff ? i % 2 == 0 : Math.random() > sarcasmAmount) ? char.toLowerCase() : char.toUpperCase()
  }

  document.getElementById('sarcasm').innerHTML = sarcasm
  document.getElementById('small').innerHTML = small
}

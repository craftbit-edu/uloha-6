function denniSviceni () {
    predni.clear()
    zadni.clear()
    // predni svetla - 1 krajni
    predni.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    predni.setPixelColor(7, neopixel.colors(NeoPixelColors.White))
    predni.show()
    zadni.show()
}
function rozsvitSvetla () {
    predni.clear()
    zadni.clear()
    // predni svetla - 2 krajni
    predni.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    predni.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    predni.setPixelColor(6, neopixel.colors(NeoPixelColors.White))
    predni.setPixelColor(7, neopixel.colors(NeoPixelColors.White))
    // zadni svetla - 1 krajni
    zadni.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    zadni.setPixelColor(7, neopixel.colors(NeoPixelColors.Red))
    predni.show()
    zadni.show()
}
let zadni: neopixel.Strip = null
let predni: neopixel.Strip = null
let stop = 0
basic.showIcon(IconNames.Yes)
predni = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
zadni = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
// Denni sviceni
basic.forever(function () {
    if (input.lightLevel() > 50) {
        basic.showString("D")
        denniSviceni()
    } else {
        basic.showString("N")
        rozsvitSvetla()
    }
})
// Brzdova svetla
basic.forever(function () {
    if (grove.measureInCentimeters(DigitalPin.P1) < 20) {
        basic.showString("B")
        zadni.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        zadni.setPixelColor(6, neopixel.colors(NeoPixelColors.Red))
        zadni.show()
    } else {
        basic.showString("R")
        zadni.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        zadni.setPixelColor(6, neopixel.colors(NeoPixelColors.Black))
        zadni.show()
    }
})

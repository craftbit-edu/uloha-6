function denniSviceni () {
    predni.clear()
    zadni.clear()
    // predni svetla - 1 krajni
    predni.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    predni.setPixelColor(7, neopixel.colors(NeoPixelColors.White))
    predni.show()
    zadni.show()
}
function nastaveni () {
    stop = 0
    predni = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
    zadni = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
    wuKong.mecanumWheel(
    wuKong.ServoList.S6,
    wuKong.ServoList.S1,
    wuKong.ServoList.S7,
    wuKong.ServoList.S3
    )
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
let stop = 0
let zadni: neopixel.Strip = null
let predni: neopixel.Strip = null
basic.showIcon(IconNames.Yes)
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
    if (grove.measureInCentimeters(DigitalPin.P1) > 20) {
        wuKong.mecanumRun(wuKong.RunList.Front, 250)
    } else {
        wuKong.mecanumStop()
    }
})

input.onButtonPressed(Button.A, function () {
    position += -10
    music.playTone(494, music.beat(BeatFraction.Sixteenth))
    sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedA), sb.color(SBColor.Green))
    if (position <= 0) {
        position = 0
        sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedA), sb.color(SBColor.Red))
    }
})
input.onButtonPressed(Button.B, function () {
    position += 10
    music.playTone(440, music.beat(BeatFraction.Sixteenth))
    sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedB), sb.color(SBColor.Green))
    if (position >= 50) {
        position = 50
        sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedB), sb.color(SBColor.Red))
    }
})
let position = 0
position = 0
basic.forever(function () {
    if (position > 0 && position < 50) {
        sb.transitionServoPosition(sb.servo(SBServo.ServoA), position, 1, sb.easing(SBEasing.SineInOut))
        sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedA), sb.color(SBColor.Black))
        sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedB), sb.color(SBColor.Black))
    }
})

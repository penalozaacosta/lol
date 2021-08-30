input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(4)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(1)
})
basic.showString("White")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
})
